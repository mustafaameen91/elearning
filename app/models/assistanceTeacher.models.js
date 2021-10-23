const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const AssistanceTeacher = function (assistanceTeacher) {
   this.teacherId = assistanceTeacher.teacherId;
   this.assistanceId = assistanceTeacher.assistanceId;
};

AssistanceTeacher.create = async (newAssistanceTeacher, result) => {
   try {
      const assistanceTeacher = await prismaInstance.assistanceTeacher.create({
         data: newAssistanceTeacher,
      });

      result(null, assistanceTeacher);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AssistanceTeacher.findById = async (assistanceTeacherId, result) => {
   try {
      const singleAssistanceTeacher =
         await prismaInstance.assistanceTeacher.findUnique({
            where: {
               idAssistanceTeacher: JSON.parse(assistanceTeacherId),
            },
         });

      if (singleAssistanceTeacher) {
         result(null, singleAssistanceTeacher);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Assistance Teacher with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AssistanceTeacher.getAll = async (result) => {
   try {
      const assistanceTeachers =
         await prismaInstance.assistanceTeacher.findMany();
      result(null, assistanceTeachers);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

AssistanceTeacher.updateById = async (
   assistanceTeacherId,
   assistanceTeacher,
   result
) => {
   try {
      const updateAssistanceTeacher =
         await prismaInstance.assistanceTeacher.update({
            where: { idAssistanceTeacher: JSON.parse(assistanceTeacherId) },
            data: assistanceTeacher,
         });
      result(null, updateAssistanceTeacher);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

AssistanceTeacher.remove = async (id, result) => {
   try {
      const deleteAssistanceTeacher =
         await prismaInstance.assistanceTeacher.delete({
            where: { idAssistanceTeacher: JSON.parse(id) },
         });
      result(null, deleteAssistanceTeacher);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

AssistanceTeacher.removeAll = async (result) => {
   try {
      const deleteAllAssistanceTeacher =
         await prismaInstance.assistanceTeacher.deleteMany({});
      result(null, deleteAllAssistanceTeacher);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = AssistanceTeacher;
