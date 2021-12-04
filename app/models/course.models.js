const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Course = function (course) {
   this.courseTitle = course.courseTitle;
   this.courseDescription = course.courseDescription;
   this.courseRate = course.courseRate;
   this.coursePrice = course.coursePrice;
   this.classId = course.classId;
   this.createdBy = course.createdBy;
   this.coursePath = course.coursePath;
   this.subjectId = course.subjectId;
   this.platformPrice = course.platformPrice;
};

Course.create = async (newCourse, result) => {
   try {
      const course = await prismaInstance.course.create({
         data: newCourse,
      });

      result(null, course);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Course.getByClassId = async (classId, result) => {
   console.log(classId);
   try {
      const subjects = await prismaInstance.subject.findMany({
         where: {
            classId: parseInt(classId),
         },
      });

      const lastAddCourse = await prismaInstance.course.findMany({
         orderBy: [
            {
               createdAt: "desc",
            },
         ],
         where: {
            classId: parseInt(classId),
         },
         take: 5,
      });

      const ratingCourse = await prismaInstance.course.findMany({
         where: {
            classId: parseInt(classId),
            courseRate: {
               gte: 4.5,
            },
         },
         take: 5,
      });

      let data = {
         subjects: subjects,
         recentlyCourses: lastAddCourse,
         featuredCourses: ratingCourse,
      };
      console.log(data);

      result(null, data);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Course.getByFilterCourse = async (filtered, limit, order, result) => {
   try {
      const courses = await prismaInstance.course.findMany({
         take: parseInt(limit),
         orderBy: {
            ...order,
         },
         where: {
            ...filtered,
         },
         include: {
            Library: true,
            Homework: true,
            CourseVideo: true,
            PromoCode: true,
            CourseDistributor: true,
         },
      });
      console.log(courses);
      result(null, courses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Course.findByTeacherId = async (teacherId, result) => {
   try {
      const courseMoney = await prismaInstance.course.findMany({
         where: {
            createdBy: parseInt(teacherId),
         },
         include: {
            StudentCourse: true,
            subject: true,
            class: true,
         },
      });
      let countMoney = courseMoney.map((money) => {
         return {
            idCourse: money.idCourse,
            courseTitle: money.courseTitle,
            courseDescription: money.courseDescription,
            courseRate: money.courseRate,
            coursePrice: money.coursePrice,
            coursePath: money.coursePath,
            platformPrice: money.platformPrice,
            subject: money.subject,
            class: money.class,
            totalPrice:
               money.coursePrice *
               money.StudentCourse.filter(
                  (stu) => stu.statusId == 2 || stu.statusId == 3
               ).length,
            remainingPrice:
               money.coursePrice *
               money.StudentCourse.filter((stu) => stu.statusId == 1).length,
            // totalPrice: money.StudentCourse.reduce(
            //    (pv, cv) => pv + cv.discount,
            //    0
            // ),
         };
      });

      result(null, countMoney);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Course.findById = async (courseId, studentId, result) => {
   console.log(studentId);
   try {
      const singleCourse = await prismaInstance.course.findUnique({
         where: {
            idCourse: JSON.parse(courseId),
         },
         include: {
            user: {
               select: {
                  idUser: true,
                  userName: true,
                  phone: true,
               },
            },
            Library: true,
            CourseVideo: true,
            Homework: {
               include: {
                  user: {
                     select: {
                        idUser: true,
                        userName: true,
                        phone: true,
                     },
                  },
               },
            },
            StudentCourse: {
               include: {
                  status: true,
                  student: true,
               },
               where: {
                  student: {
                     userId: studentId,
                  },
               },
            },
            CourseDistributor: {
               include: {
                  user: {
                     select: {
                        idUser: true,
                        userName: true,
                        phone: true,
                        provinceId: true,
                        province: true,
                        distributorInfo: true,
                     },
                  },
               },
            },
         },
      });

      if (singleCourse) {
         let currentDate = new Date();
         currentDate.setHours(0, 0, 0, 0);
         let data = singleCourse.CourseVideo.map((video) => {
            let videoDate = new Date(video.unlockAt);
            videoDate.setHours(0, 0, 0, 0);
            return {
               idCourseVideo: video.idCourseVideo,
               videoTitle: video.videoTitle,
               videoLink: video.videoLink,
               videoDescription: video.videoDescription,
               courseId: video.courseId,
               createdBy: video.createdBy,
               unlockAt: video.unlockAt,
               createdAt: video.createdAt,
               videoStatus: currentDate >= videoDate ? 1 : 0,
            };
         });
         console.log(singleCourse);
         if (
            singleCourse.StudentCourse.length > 0 &&
            singleCourse.StudentCourse[0]?.statusId == 1
         ) {
            singleCourse.enrolled = false;
            singleCourse.isPending = true;
         } else if (
            singleCourse.StudentCourse.length > 0 &&
            singleCourse.StudentCourse[0]?.statusId == 2
         ) {
            singleCourse.enrolled = true;
            singleCourse.isPending = false;
         } else {
            singleCourse.enrolled = false;
            singleCourse.isPending = false;
         }
         singleCourse.CourseVideo = data;
         result(null, singleCourse);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Course with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Course.getAll = async (result) => {
   try {
      const courses = await prismaInstance.course.findMany({
         include: {
            subject: true,
            CourseVideo: true,
         },
      });
      result(null, courses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Course.updateById = async (courseId, course, result) => {
   try {
      const updateCourse = await prismaInstance.course.update({
         where: { idCourse: JSON.parse(courseId) },
         data: course,
      });
      result(null, updateCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Course.remove = async (id, result) => {
   try {
      const deleteCourse = await prismaInstance.course.delete({
         where: { idCourse: JSON.parse(id) },
      });
      result(null, deleteCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Course.removeAll = async (result) => {
   try {
      const deleteAllCourse = await prismaInstance.course.deleteMany({});
      result(null, deleteAllCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Course;
