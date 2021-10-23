const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const TeacherAssistanceInfo = function (teacherAssistanceInfo) {
   this.financialDetails = teacherAssistanceInfo.financialDetails;
   this.userId = teacherAssistanceInfo.userId;
};

TeacherAssistanceInfo.create = async (newTeacherAssistanceInfo, result) => {
   try {
      const teacherAssistanceInfo =
         await prismaInstance.teacherAssistanceInfo.create({
            data: newTeacherAssistanceInfo,
         });

      result(null, teacherAssistanceInfo);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

TeacherAssistanceInfo.findById = async (teacherAssistanceInfoId, result) => {
   try {
      const singleTeacherAssistanceInfo =
         await prismaInstance.teacherAssistanceInfo.findUnique({
            where: {
               idTeacherAssistance: JSON.parse(teacherAssistanceInfoId),
            },
         });

      if (singleTeacherAssistanceInfo) {
         result(null, singleTeacherAssistanceInfo);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Teacher AssistanceInfo with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

TeacherAssistanceInfo.getAll = async (result) => {
   try {
      const teacherAssistanceInfos =
         await prismaInstance.teacherAssistanceInfo.findMany();
      result(null, teacherAssistanceInfos);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

TeacherAssistanceInfo.updateById = async (
   teacherAssistanceInfoId,
   teacherAssistanceInfo,
   result
) => {
   try {
      const updateTeacherAssistanceInfo =
         await prismaInstance.teacherAssistanceInfo.update({
            where: { idTeacherAssistance: JSON.parse(teacherAssistanceInfoId) },
            data: teacherAssistanceInfo,
         });
      result(null, updateTeacherAssistanceInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

TeacherAssistanceInfo.remove = async (id, result) => {
   try {
      const deleteTeacherAssistanceInfo =
         await prismaInstance.teacherAssistanceInfo.delete({
            where: { idTeacherAssistance: JSON.parse(id) },
         });
      result(null, deleteTeacherAssistanceInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

TeacherAssistanceInfo.removeAll = async (result) => {
   try {
      const deleteAllTeacherAssistanceInfos =
         await prismaInstance.teacherAssistanceInfo.deleteMany({});
      result(null, deleteAllTeacherAssistanceInfos);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = TeacherAssistanceInfo;
