const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const StudentInfo = function (studentInfo) {
   this.schoolName = studentInfo.schoolName;
   this.grade = studentInfo.grade;
   this.dob = studentInfo.dob;
   this.photoPath = studentInfo.photoPath;
   this.classId = studentInfo.classId;
   this.userId = studentInfo.userId;
};

StudentInfo.create = async (newStudentInfo, result) => {
   try {
      const studentInfo = await prismaInstance.studentInfo.create({
         data: newStudentInfo,
      });

      result(null, studentInfo);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentInfo.findById = async (studentInfoId, result) => {
   try {
      const singleStudentInfo = await prismaInstance.studentInfo.findUnique({
         where: {
            idStudent: JSON.parse(studentInfoId),
         },
      });

      if (singleStudentInfo) {
         result(null, singleStudentInfo);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found StudentInfo with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentInfo.findByUserId = async (userId, result) => {
   try {
      const singleStudentInfo = await prismaInstance.studentInfo.findUnique({
         where: {
            userId: JSON.parse(userId),
         },
         include: {
            class: true,
         },
      });

      if (singleStudentInfo) {
         result(null, singleStudentInfo);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found StudentInfo with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentInfo.getAll = async (result) => {
   try {
      const students = await prismaInstance.studentInfo.findMany({
         include: { user: true, class: true },
      });
      result(null, students);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentInfo.updateById = async (studentInfoId, studentInfo, result) => {
   try {
      const updateStudentInfo = await prismaInstance.studentInfo.update({
         where: { idStudent: JSON.parse(studentInfoId) },
         data: studentInfo,
      });
      result(null, updateStudentInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentInfo.remove = async (id, result) => {
   try {
      const deleteStudentInfo = await prismaInstance.studentInfo.delete({
         where: { idStudent: JSON.parse(id) },
      });
      result(null, deleteStudentInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentInfo.removeAll = async (result) => {
   try {
      const deleteAllStudentInfo = await prismaInstance.studentInfo.deleteMany(
         {}
      );
      result(null, deleteAllStudentInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = StudentInfo;
