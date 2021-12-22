const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

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

      result(null, courseDistributor);
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
               user: true,
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
               user: {
                  idUser: JSON.parse(distributorId),
               },
            },
            include: {
               course: true,
               user: true,
            },
         }
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
               user: true,
            },
         }
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
   result
) => {
   try {
      console.log(courseDistributor);
      const updateCourseDistributor =
         await prismaInstance.courseDistributor.update({
            where: { idCourseDistributor: JSON.parse(courseDistributorId) },
            data: courseDistributor,
         });
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
