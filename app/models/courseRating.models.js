const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const CourseRating = function (courseRating) {
   this.courseId = courseRating.courseId;
   this.userId = courseRating.userId;
   this.rate = courseRating.rate;
};

CourseRating.create = async (newCourseRating, result) => {
   try {
      const courseRating = await prismaInstance.courseRating.create({
         data: newCourseRating,
      });

      result(null, courseRating);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseRating.findById = async (courseRatingId, result) => {
   try {
      const singleCourseRating = await prismaInstance.courseRating.findUnique({
         where: {
            idCourseRating: JSON.parse(courseRatingId),
         },
      });

      if (singleCourseRating) {
         result(null, singleCourseRating);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found CourseRating with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseRating.getAll = async (result) => {
   try {
      const courseRatings = await prismaInstance.courseRating.findMany();
      result(null, courseRatings);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

CourseRating.updateById = async (courseRatingId, courseRating, result) => {
   try {
      const updateCourseRating = await prismaInstance.courseRating.update({
         where: { idCourseRating: JSON.parse(courseRatingId) },
         data: courseRating,
      });
      result(null, updateCourseRating);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

CourseRating.remove = async (id, result) => {
   try {
      const deleteCourseRating = await prismaInstance.courseRating.delete({
         where: { idCourseRating: JSON.parse(id) },
      });
      result(null, deleteCourseRating);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

CourseRating.removeAll = async (result) => {
   try {
      const deleteAllCourseRating =
         await prismaInstance.courseRating.deleteMany({});
      result(null, deleteAllCourseRating);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = CourseRating;
