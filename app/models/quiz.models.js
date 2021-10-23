const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Quiz = function (quiz) {
   this.quizQuestion = quiz.quizQuestion;
   this.videoId = quiz.videoId;
   this.createdBy = quiz.createdBy;
};

Quiz.create = async (newQuiz, result) => {
   try {
      const quiz = await prismaInstance.quiz.create({
         data: newQuiz,
      });

      result(null, quiz);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Quiz.findById = async (quizId, result) => {
   try {
      const singleQuiz = await prismaInstance.quiz.findUnique({
         where: {
            idQuiz: JSON.parse(quizId),
         },
      });

      if (singleQuiz) {
         result(null, singleQuiz);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Quiz with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Quiz.getAll = async (result) => {
   try {
      const quizzes = await prismaInstance.quiz.findMany();
      result(null, quizzes);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Quiz.updateById = async (quizId, quiz, result) => {
   try {
      const updateQuiz = await prismaInstance.quiz.update({
         where: { idQuiz: JSON.parse(quizId) },
         data: quiz,
      });
      result(null, updateQuiz);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Quiz.remove = async (id, result) => {
   try {
      const deleteQuiz = await prismaInstance.quiz.delete({
         where: { idQuiz: JSON.parse(id) },
      });
      result(null, deleteQuiz);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Quiz.removeAll = async (result) => {
   try {
      const deleteAllQuiz = await prismaInstance.quiz.deleteMany({});
      result(null, deleteAllQuiz);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Quiz;
