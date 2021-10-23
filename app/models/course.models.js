const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Course = function (course) {
   this.courseTitle = course.courseTitle;
   this.courseDescription = course.courseDescription;
   this.courseRate = course.courseRate;
   this.coursePrice = course.coursePrice;
   this.subCategoryId = course.subCategoryId;
   this.createdBy = course.createdBy;
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

Course.findById = async (courseId, result) => {
   try {
      const singleCourse = await prismaInstance.course.findUnique({
         where: {
            idCourse: JSON.parse(courseId),
         },
      });

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
