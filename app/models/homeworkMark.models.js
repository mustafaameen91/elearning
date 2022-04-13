const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const HomeworkMark = function (homeworkMark) {
   this.userId = homeworkMark.userId;
   this.homeworkId = homeworkMark.homeworkId;
   this.mark = parseInt(homeworkMark.mark);
};

HomeworkMark.create = async (newHomeworkMark, result) => {
   try {
      const homeworkMark = await prismaInstance.homeWorkMark.create({
         data: newHomeworkMark,
      });

      result(null, homeworkMark);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

HomeworkMark.findById = async (homeworkMarkId, result) => {
   try {
      const singleHomeworkMark = await prismaInstance.homeworkMark.findUnique({
         where: {
            idHomeworkMark: JSON.parse(homeworkMarkId),
         },
      });

      if (singleHomeworkMark) {
         result(null, singleHomeworkMark);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found HomeworkMark with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

HomeworkMark.getAll = async (result) => {
   try {
      const homeworkMarks = await prismaInstance.homeworkMark.findMany();
      result(null, homeworkMarks);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

HomeworkMark.updateById = async (homeworkMarkId, homeworkMark, result) => {
   try {
      const updateHomeworkMark = await prismaInstance.homeworkMark.update({
         where: { idHomeworkMark: JSON.parse(homeworkMarkId) },
         data: homeworkMark,
      });
      result(null, updateHomeworkMark);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

HomeworkMark.remove = async (id, result) => {
   try {
      const deleteHomeworkMark = await prismaInstance.homeworkMark.delete({
         where: { idHomeworkMark: JSON.parse(id) },
      });
      result(null, deleteHomeworkMark);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

HomeworkMark.removeAll = async (result) => {
   try {
      const deleteAllHomeworkMark =
         await prismaInstance.homeworkMark.deleteMany({});
      result(null, deleteAllHomeworkMark);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = HomeworkMark;
