const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");
const notification = require("./../notifications/notification.js");

const CourseDistributor = function (courseDistributor) {
   this.courseId = courseDistributor.courseId;
   this.distributorId = courseDistributor.distributorId;
   this.distributorStatus = courseDistributor.distributorStatus;
};

CourseDistributor.create = async (newCourseDistributor, result) => {
   try {
      const courseDistributor = await prismaInstance.courseDistributor.create({
         data: newCourseDistributor,
      });

      let distributor = await prismaInstance.user.findUnique({
         where: {
            idUser: parseInt(newCourseDistributor.distributorId),
         },
      });

      if (distributor) {
         let course = await prismaInstance.course.findUnique({
            where: {
               idCourse: parseInt(newCourseDistributor.courseId),
            },
            include: {
               user: true,
            },
         });
         var teacherMessage = {
            app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
            headings: { en: `تم استلام طلب توزيع` },
            contents: {
               en: `ارسل لك ${distributor.userName} طلب لتوزيع كورس ${course.courseTitle}`,
            },
            include_player_ids: [course.user.playerId],
         };
         notification(teacherMessage);
      }

      result(null, courseDistributor);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseDistributor.findByIdOfCourseAndDist = async (
   distributorId,
   courseId,
   result,
) => {
   try {
      const singleCourseDistributor =
         await prismaInstance.courseDistributor.findMany({
            where: {
               AND: [
                  {
                     courseId: parseInt(courseId),
                  },
                  {
                     distributorId: parseInt(distributorId),
                  },
               ],
            },
         });

      if (singleCourseDistributor.length > 0) {
         result(null, { found: true });
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Course Distributor with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseDistributor.findByIdOfCourse = async (courseId, result) => {
   try {
      const singleCourseDistributor =
         await prismaInstance.courseDistributor.findMany({
            where: {
               courseId: parseInt(courseId),
            },
            include: {
               user: {
                  include: {
                     province: true,
                  },
               },
            },
         });

      if (singleCourseDistributor.length > 0) {
         result(null, singleCourseDistributor);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Course Distributor with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseDistributor.findById = async (courseDistributorId, result) => {
   try {
      const singleCourseDistributor =
         await prismaInstance.courseDistributor.findUnique({
            where: {
               idCourseDistributor: JSON.parse(courseDistributorId),
            },
         });

      if (singleCourseDistributor) {
         result(null, singleCourseDistributor);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Course Distributor with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseDistributor.findByDistributorId = async (distributorId, result) => {
   try {
      const courseDistributor = await prismaInstance.courseDistributor.findMany(
         {
            where: {
               AND: [
                  {
                     user: {
                        idUser: JSON.parse(distributorId),
                     },
                  },
                  {
                     distributorStatus: "ACCEPTED",
                  },
               ],
            },
            include: {
               course: true,
               user: true,
            },
         },
      );

      result(null, courseDistributor);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseDistributor.findByTeacherDistributor = async (teacherId, result) => {
   try {
      const courseDistributor = await prismaInstance.courseDistributor.findMany(
         {
            where: {
               course: {
                  createdBy: parseInt(teacherId),
               },
            },
            orderBy: {
               distributorStatus: "desc",
            },
            include: {
               course: true,
               user: {
                  include: {
                     province: true,
                  },
               },
            },
         },
      );

      result(null, courseDistributor);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseDistributor.getAll = async (result) => {
   try {
      const courseDistributors =
         await prismaInstance.courseDistributor.findMany();
      result(null, courseDistributors);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseDistributor.updateById = async (
   courseDistributorId,
   courseDistributor,
   result,
) => {
   try {
      const updateCourseDistributor =
         await prismaInstance.courseDistributor.update({
            where: { idCourseDistributor: JSON.parse(courseDistributorId) },
            data: courseDistributor,
         });

      let distributor = await prismaInstance.user.findUnique({
         where: {
            idUser: updateCourseDistributor.distributorId,
         },
      });

      if (
         distributor &&
         updateCourseDistributor.distributorStatus == "ACCEPTED"
      ) {
         let course = await prismaInstance.course.findUnique({
            where: {
               idCourse: parseInt(updateCourseDistributor.courseId),
            },
            include: {
               user: true,
            },
         });
         var message = {
            app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
            headings: { en: `قبول طلب` },
            contents: {
               en: `وافق ${course.user.userName} على طلب توزيعك لكورس ${course.courseTitle}`,
            },
            include_player_ids: [distributor.playerId],
         };
         notification(message);
      }

      result(null, updateCourseDistributor);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

CourseDistributor.remove = async (id, result) => {
   try {
      const deleteCourseDistributor =
         await prismaInstance.courseDistributor.delete({
            where: { idCourseDistributor: JSON.parse(id) },
         });
      result(null, deleteCourseDistributor);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

CourseDistributor.removeAll = async (result) => {
   try {
      const deleteAllCourseDistributor =
         await prismaInstance.courseDistributor.deleteMany({});
      result(null, deleteAllCourseDistributor);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = CourseDistributor;
