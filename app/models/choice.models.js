const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Choice = function (choice) {
   this.questionChoice = choice.questionChoice;
   this.correctAnswer = choice.correctAnswer;
   this.quizId = choice.quizId;
};

Choice.create = async (newChoice, result) => {
   try {
      const choice = await prismaInstance.choice.create({
         data: newChoice,
      });

      result(null, choice);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Choice.createMulti = async (newChoices, result) => {
   try {
      const choice = await prismaInstance.choice.createMany({
         data: newChoices,
      });

      result(null, choice);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Choice.findById = async (choiceId, result) => {
   try {
      const singleChoice = await prismaInstance.choice.findUnique({
         where: {
            idChoice: JSON.parse(choiceId),
         },
      });

      if (singleChoice) {
         result(null, singleChoice);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Choice with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Choice.getAll = async (result) => {
   try {
      const choices = await prismaInstance.choice.findMany();
      result(null, choices);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Choice.updateById = async (choiceId, choice, result) => {
   try {
      const updateChoice = await prismaInstance.choice.update({
         where: { idChoice: JSON.parse(choiceId) },
         data: choice,
      });
      result(null, updateChoice);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Choice.updateMulti = async (choiceIds, choices, result) => {
   try {
      choiceIds.map((choiceId, index) => {
         const updateChoice = prismaInstance.choice.updateMany({
            where: { idChoice: JSON.parse(choiceId) },
            data: { questionChoice: choices[index] },
         });

         console.log(updateChoice);
      });

      result(null, { message: "updated" });
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Choice.remove = async (id, result) => {
   try {
      const deleteChoice = await prismaInstance.choice.delete({
         where: { idChoice: JSON.parse(id) },
      });
      result(null, deleteChoice);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Choice.removeAll = async (result) => {
   try {
      const deleteAllChoice = await prismaInstance.choice.deleteMany({});
      result(null, deleteAllChoice);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Choice;
