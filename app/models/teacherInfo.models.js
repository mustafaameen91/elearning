const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const TeacherInfo = function (teacherInfo) {
   this.specialty = teacherInfo.specialty;
   this.schoolName = teacherInfo.schoolName;
   this.photoPath = teacherInfo.photoPath;
   this.bio = teacherInfo.bio;
   this.userId = teacherInfo.userId;
};

TeacherInfo.create = async (newTeacherInfo, result) => {
   try {
      const teacherInfo = await prismaInstance.teacherInfo.create({
         data: newTeacherInfo,
      });

      result(null, teacherInfo);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

TeacherInfo.findById = async (teacherInfoId, result) => {
   try {
      const singleTeacherInfo = await prismaInstance.teacherInfo.findUnique({
         where: {
            idTeacher: JSON.parse(teacherInfoId),
         },
      });

      if (singleTeacherInfo) {
         result(null, singleTeacherInfo);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found TeacherInfo with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

TeacherInfo.getAll = async (result) => {
   try {
      const teacherInfos = await prismaInstance.teacherInfo.findMany({
         include: {
            user: {
               include: {
                  AssistanceTeachers: true,
               },
            },
         },
      });
      result(null, teacherInfos);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

TeacherInfo.updateById = async (teacherInfoId, teacherInfo, result) => {
   try {
      const updateTeacherInfo = await prismaInstance.teacherInfo.update({
         where: { idTeacher: JSON.parse(teacherInfoId) },
         data: teacherInfo,
      });
      result(null, updateTeacherInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

TeacherInfo.remove = async (id, result) => {
   try {
      const deleteTeacherInfo = await prismaInstance.teacherInfo.delete({
         where: { idTeacher: JSON.parse(id) },
      });
      result(null, deleteTeacherInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

TeacherInfo.removeAll = async (result) => {
   try {
      const deleteAllTeacherInfos = await prismaInstance.teacherInfo.deleteMany(
         {}
      );
      result(null, deleteAllTeacherInfos);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = TeacherInfo;
