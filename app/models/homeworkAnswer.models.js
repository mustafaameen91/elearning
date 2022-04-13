const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const HomeworkAnswer = function (homeworkAnswer) {
   this.homeworkId = homeworkAnswer.homeworkId;
   this.userId = homeworkAnswer.userId;
   this.answerPath = homeworkAnswer.answerPath;
};

HomeworkAnswer.create = async (newHomeworkAnswer, result) => {
   try {
      const homeworkAnswer = await prismaInstance.homeworkAnswer.create({
         data: newHomeworkAnswer,
      });

      result(null, homeworkAnswer);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

HomeworkAnswer.findByIdForStudent = async (userId, homeworkId, result) => {
   try {
      const singleHomeworkAnswer = await prismaInstance.homeworkAnswer.findMany(
         {
            where: {
               AND: [{ homeworkId: homeworkId }, { userId: userId }],
            },
         }
      );
      console.log(singleHomeworkAnswer);
      if (singleHomeworkAnswer.length > 0) {
         result(null, { answer: true });
      } else {
         result(null, { answer: false });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

HomeworkAnswer.findById = async (homeworkAnswerId, result) => {
   try {
      const singleHomeworkAnswer =
         await prismaInstance.homeworkAnswer.findUnique({
            where: {
               idHomeworkAnswer: JSON.parse(homeworkAnswerId),
            },
         });

      if (singleHomeworkAnswer) {
         result(null, singleHomeworkAnswer);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Homework Answer with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

HomeworkAnswer.getAll = async (result) => {
   try {
      const homeworkAnswers = await prismaInstance.homeworkAnswer.findMany();
      result(null, homeworkAnswers);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

HomeworkAnswer.updateById = async (
   homeworkAnswerId,
   homeworkAnswer,
   result
) => {
   try {
      const updateHomeworkAnswer = await prismaInstance.homeworkAnswer.update({
         where: { idHomeworkAnswer: JSON.parse(homeworkAnswerId) },
         data: homeworkAnswer,
      });
      result(null, updateHomeworkAnswer);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

HomeworkAnswer.remove = async (id, result) => {
   try {
      const deleteHomeworkAnswer = await prismaInstance.homeworkAnswer.delete({
         where: { idHomeworkAnswer: JSON.parse(id) },
      });
      result(null, deleteHomeworkAnswer);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

HomeworkAnswer.removeAll = async (result) => {
   try {
      const deleteAllHomeworkAnswers =
         await prismaInstance.homeworkAnswer.deleteMany({});
      result(null, deleteAllHomeworkAnswers);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = HomeworkAnswer;
