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
   this.teleChannel = course.teleChannel;
   this.iapId = course.iapId;
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
         where: {
            classId: parseInt(classId),
         },
         orderBy: [
            {
               createdAt: "desc",
            },
         ],
         include: {
            user: true,
            class: true,
            StudentCourse: true,
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
         include: {
            user: true,
            class: true,
            StudentCourse: true,
         },
         take: 5,
      });

      let courseData = lastAddCourse.map((course) => {
         return {
            ...course,
            pendingStudents: course.StudentCourse.filter((student) => {
               if (student.studentId == 1) {
                  return student;
               }
            }).length,
            enrolledStudents: course.StudentCourse.filter((student) => {
               if (student.studentId != 1) {
                  return student;
               }
            }).length,
         };
      });

      let featuredData = ratingCourse.map((course) => {
         return {
            ...course,
            pendingStudents: course.StudentCourse.filter((student) => {
               if (student.studentId == 1) {
                  return student;
               }
            }).length,
            enrolledStudents: course.StudentCourse.filter((student) => {
               if (student.studentId != 1) {
                  return student;
               }
            }).length,
         };
      });

      let data = {
         subjects: subjects,
         recentlyCourses: courseData,
         featuredCourses: featuredData,
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
            class: true,
            Library: true,
            Homework: true,
            CourseVideo: true,
            PromoCode: true,
            CourseDistributor: true,
            StudentCourse: true,
         },
      });

      let courseData = courses.map((course) => {
         return {
            ...course,
            pendingStudents: course.StudentCourse.filter((student) => {
               if (student.studentId == 1) {
                  return student;
               }
            }).length,
            enrolledStudents: course.StudentCourse.filter((student) => {
               if (student.studentId != 1) {
                  return student;
               }
            }).length,
         };
      });

      console.log(courseData);
      result(null, courseData);
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
            PromoCode: {},
         },
      });
      let countMoney = courseMoney.map((money) => {
         let studentDiscounts = money.StudentCourse.reduce(
            (pv, cv) => pv + cv.discount,
            0
         );
         let studentTotalPrice =
            money.coursePrice *
            money.StudentCourse.filter(
               (stu) => stu.statusId == 2 || stu.statusId == 3
            ).length;
         return {
            idCourse: money.idCourse,
            courseTitle: money.courseTitle,
            courseDescription: money.courseDescription,
            courseRate: money.courseRate,
            teleChannel: money.teleChannel,
            aipId: money.aipId,
            coursePrice: money.coursePrice,
            coursePath: money.coursePath,
            platformPrice: money.platformPrice,
            subject: money.subject,
            class: money.class,
            totalPrice: studentTotalPrice - studentDiscounts,
            remainingPrice:
               money.coursePrice *
               money.StudentCourse.filter((stu) => stu.statusId == 1).length,
            enrolledStudents: money.StudentCourse.filter(
               (stu) => stu.statusId == 2 || stu.statusId == 3
            ).length,
            pendingStudents: money.StudentCourse.filter(
               (stu) => stu.statusId == 1
            ),
            studentDiscount: studentDiscounts,
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

Course.findByAllCourses = async (filtered, result) => {
   try {
      const courseMoney = await prismaInstance.course.findMany({
         where: { ...filtered },
         include: {
            StudentCourse: true,
            subject: true,
            class: true,
            user: true,
         },
      });
      let countMoney = courseMoney.map((money) => {
         return {
            idCourse: money.idCourse,
            courseTitle: money.courseTitle,
            courseDescription: money.courseDescription,
            courseRate: money.courseRate,
            teleChannel: money.teleChannel,
            aipId: money.aipId,
            coursePrice: money.coursePrice,
            coursePath: money.coursePath,
            platformPrice: money.platformPrice,
            createdAt: money.createdAt,
            createdBy: money.createdBy,
            subjectId: money.subjectId,
            subject: money.subject,
            class: money.class,
            user: money.user,
            totalPrice:
               money.coursePrice *
               money.StudentCourse.filter(
                  (stu) => stu.statusId == 2 || stu.statusId == 3
               ).length,
            remainingPrice:
               money.coursePrice *
               money.StudentCourse.filter((stu) => stu.statusId == 1).length,

            platformPriceTotal:
               money.platformPrice *
               money.StudentCourse.filter((stu) => stu.statusId == 3).length,
            PendingStudents: money.StudentCourse.filter(
               (stu) => stu.statusId == 1
            ).length,
            EnrolledStudents: money.StudentCourse.filter(
               (stu) => stu.statusId == 2
            ).length,
            ActiveStudents: money.StudentCourse.filter(
               (stu) => stu.statusId == 3
            ).length,
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

Course.findByIdTeacher = async (courseId, teacherId, result) => {
   console.log(teacherId);
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
            CourseVideo: {
               include: {
                  Quiz: {
                     include: {
                        Choice: true,
                     },
                  },
               },
            },
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
               quiz: video.Quiz[0],
            };
         });

         if (singleCourse.createdBy == teacherId) {
            singleCourse.enrolled = true;
            singleCourse.isPending = false;
         } else if (singleCourse.coursePrice == 0) {
            singleCourse.enrolled = true;
            singleCourse.isPending = false;
         } else {
            singleCourse.enrolled = false;
            singleCourse.isPending = false;
         }

         singleCourse.CourseVideo = data;

         (singleCourse.pendingStudents = singleCourse.StudentCourse.filter(
            (student) => {
               if (student.studentId == 1) {
                  return student;
               }
            }
         ).length),
            (singleCourse.enrolledStudents = singleCourse.StudentCourse.filter(
               (student) => {
                  if (student.studentId != 1) {
                     return student;
                  }
               }
            ).length),
            console.log(singleCourse);
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

Course.findByIdWithoutAuth = async (courseId, result) => {
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
            CourseVideo: {
               include: {
                  Quiz: {
                     include: {
                        Choice: true,
                     },
                  },
               },
            },
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

      console.log(singleCourse);

      if (singleCourse) {
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

Course.findByIdForHomework = async (courseId, studentId, result) => {
   console.log(studentId);
   try {
      const courseHomework = await prismaInstance.course.findUnique({
         where: {
            idCourse: JSON.parse(courseId),
         },
         include: {
            Homework: {
               include: {
                  HomeWorkMark: true,
                  HomeworkAnswer: {
                     include: { user: true },
                  },
               },
            },
         },
      });

      if (courseHomework) {
         result(null, courseHomework);
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

Course.findById = async (courseId, studentId, result) => {
   console.log(studentId);
   try {
      const singleCourse = await prismaInstance.course.findUnique({
         where: {
            idCourse: JSON.parse(courseId),
         },
         include: {
            subject: {
               include: {
                  class: true,
               },
            },
            user: {
               select: {
                  idUser: true,
                  userName: true,
                  phone: true,
               },
            },
            Library: true,
            CourseVideo: {
               include: {
                  Quiz: {
                     include: {
                        Choice: true,
                     },
                  },
               },
            },
            Homework: {
               include: {
                  HomeWorkMark: {
                     where: {
                        userId: studentId,
                     },
                  },
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
               secondVideoLink: video.secondVideoLink,
               videoDescription: video.videoDescription,
               courseId: video.courseId,
               createdBy: video.createdBy,
               unlockAt: video.unlockAt,
               createdAt: video.createdAt,
               videoStatus: currentDate >= videoDate ? 1 : 0,
               quiz: video.Quiz[0],
            };
         });

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

         (singleCourse.pendingStudents = singleCourse.StudentCourse.filter(
            (student) => {
               if (student.studentId == 1) {
                  return student;
               }
            }
         ).length),
            (singleCourse.enrolledStudents = singleCourse.StudentCourse.filter(
               (student) => {
                  if (student.studentId != 1) {
                     return student;
                  }
               }
            ).length),
            console.log(singleCourse);

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
            subject: {
               include: {
                  class: true,
               },
            },
            CourseVideo: {
               include: {
                  VideoComment: true,
               },
            },
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
