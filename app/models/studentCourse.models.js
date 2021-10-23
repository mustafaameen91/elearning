const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const StudentCourse = function (studentCourse) {
   this.studentId = studentCourse.studentId;
   this.courseId = studentCourse.courseId;
   this.statusId = studentCourse.statusId;
   this.distributorId = studentCourse.distributorId;
   this.discount = studentCourse.discount;
};

StudentCourse.create = async (newStudentCourse, result) => {
   try {
      const studentCourse = await prismaInstance.studentCourse.create({
         data: newStudentCourse,
      });

      result(null, studentCourse);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.findById = async (studentCourseId, result) => {
   try {
      const singleStudentCourse = await prismaInstance.studentCourse.findUnique(
         {
            where: {
               idStudentCourse: JSON.parse(studentCourseId),
            },
         }
      );

      if (singleStudentCourse) {
         result(null, singleStudentCourse);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found StudentCourse with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.getAll = async (result) => {
   try {
      const studentCourses = await prismaInstance.studentCourse.findMany();
      result(null, studentCourses);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentCourse.updateById = async (studentCourseId, studentCourse, result) => {
   try {
      const updateStudentCourse = await prismaInstance.studentCourse.update({
         where: { idStudentCourse: JSON.parse(studentCourseId) },
         data: studentCourse,
      });
      result(null, updateStudentCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentCourse.remove = async (id, result) => {
   try {
      const deleteStudentCourse = await prismaInstance.studentCourse.delete({
         where: { idStudentCourse: JSON.parse(id) },
      });
      result(null, deleteStudentCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentCourse.removeAll = async (result) => {
   try {
      const deleteAllStudentCourse =
         await prismaInstance.studentCourse.deleteMany({});
      result(null, deleteAllStudentCourse);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = StudentCourse;
