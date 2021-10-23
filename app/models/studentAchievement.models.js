const {
   prismaErrorHandling,
   prismaInstance,
} = require("../middleware/handleError.middleware.js");

const StudentAchievement = function (studentAchievement) {
   this.courseId = studentAchievement.courseId;
   this.average = studentAchievement.average;
   this.userId = studentAchievement.userId;
   this.shearing = studentAchievement.shearing;
};

StudentAchievement.create = async (newStudentAchievement, result) => {
   try {
      const studentAchievement = await prismaInstance.studentAchievement.create(
         {
            data: newStudentAchievement,
         }
      );

      result(null, studentAchievement);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentAchievement.findById = async (studentAchievementId, result) => {
   try {
      const singleStudentAchievement =
         await prismaInstance.studentAchievement.findUnique({
            where: {
               idStudentAchievement: JSON.parse(studentAchievementId),
            },
         });

      if (singleStudentAchievement) {
         result(null, singleStudentAchievement);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found student Achievement with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentAchievement.getAll = async (result) => {
   try {
      const studentAchievements =
         await prismaInstance.studentAchievement.findMany();
      result(null, studentAchievements);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

StudentAchievement.updateById = async (
   studentAchievementId,
   studentAchievement,
   result
) => {
   try {
      const updateStudentAchievement =
         await prismaInstance.studentAchievement.update({
            where: { idStudentAchievement: JSON.parse(studentAchievementId) },
            data: studentAchievement,
         });
      result(null, updateStudentAchievement);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentAchievement.remove = async (id, result) => {
   try {
      const deleteStudentAchievement =
         await prismaInstance.studentAchievement.delete({
            where: { idStudentAchievement: JSON.parse(id) },
         });
      result(null, deleteStudentAchievement);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

StudentAchievement.removeAll = async (result) => {
   try {
      const deleteAllStudentAchievements =
         await prismaInstance.studentAchievement.deleteMany({});
      result(null, deleteAllStudentAchievements);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = StudentAchievement;
