const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const StudentGroup = function (studentGroup) {
   this.studentId = studentGroup.studentId;
   this.groupId = studentGroup.groupId;
};

StudentGroup.create = async (newStudentGroup, result) => {
   try {
      const studentGroup = await prismaInstance.studentGroup.create({
         data: newStudentGroup,
      });

      result(null, studentGroup);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentGroup.findByIdGroup = async (studentGroupId, result) => {
   try {
      const singleStudentGroup = await prismaInstance.studentGroup.findUnique({
         where: {
            idStudentGroup: JSON.parse(studentGroupId),
         },
      });

      if (singleStudentGroup) {
         result(null, singleStudentGroup);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found StudentGroup with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentGroup.findById = async (studentGroupId, result) => {
   try {
      const singleStudentGroup = await prismaInstance.studentGroup.findUnique({
         where: {
            idStudentGroup: JSON.parse(studentGroupId),
         },
      });

      if (singleStudentGroup) {
         result(null, singleStudentGroup);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found StudentGroup with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentGroup.getAll = async (result) => {
   try {
      const studentGroups = await prismaInstance.studentGroup.findMany();
      result(null, studentGroups);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentGroup.updateById = async (studentGroupId, studentGroup, result) => {
   try {
      const updateStudentGroup = await prismaInstance.studentGroup.update({
         where: { idStudentGroup: JSON.parse(studentGroupId) },
         data: studentGroup,
      });
      result(null, updateStudentGroup);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentGroup.remove = async (id, result) => {
   try {
      const deleteStudentGroup = await prismaInstance.studentGroup.delete({
         where: { idStudentGroup: JSON.parse(id) },
      });
      result(null, deleteStudentGroup);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentGroup.removeAll = async (result) => {
   try {
      const deleteAllStudentGroup =
         await prismaInstance.studentGroup.deleteMany({});
      result(null, deleteAllStudentGroup);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = StudentGroup;
