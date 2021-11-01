const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Favorites = function (favorites) {
   this.studentId = favorites.studentId;
   this.courseId = favorites.courseId;
};

Favorites.create = async (newFavorites, result) => {
   try {
      const singleFavorites = await prismaInstance.favorites.findMany({
         where: {
            studentId: parseInt(newFavorites.studentId),
            courseId: parseInt(newFavorites.courseId),
         },
      });

      if (singleFavorites.length > 0) {
         result(null, singleFavorites);
         const deleteFavorites = await prismaInstance.favorites.delete({
            where: { idFavorites: JSON.parse(singleFavorites[0].idFavorites) },
         });
      } else {
         const studentFavorites = await prismaInstance.favorites.create({
            data: newFavorites,
         });

         result(null, studentFavorites);
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Favorites.findById = async (favoritesId, result) => {
   try {
      const singleFavorites = await prismaInstance.favorites.findUnique({
         where: {
            idFavorites: JSON.parse(favoritesId),
         },
         include: {
            Subject: true,
         },
      });

      if (singleFavorites) {
         result(null, singleFavorites);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Favorites with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Favorites.getByStudentId = async (studentId, result) => {
   try {
      const favorites = await prismaInstance.favorites.findMany({
         where: {
            studentId: parseInt(studentId),
         },
         include: {
            course: true,
         },
      });
      result(null, favorites);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Favorites.getAll = async (result) => {
   try {
      const favorites = await prismaInstance.favorites.findMany({
         include: {
            Subject: true,
         },
      });
      result(null, favorites);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Favorites.updateById = async (favoritesId, studentFavorites, result) => {
   try {
      const updateFavorites = await prismaInstance.favorites.update({
         where: { idFavorites: JSON.parse(favoritesId) },
         data: studentFavorites,
      });
      result(null, updateFavorites);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Favorites.remove = async (id, result) => {
   try {
      const deleteFavorites = await prismaInstance.favorites.delete({
         where: { idFavorites: JSON.parse(id) },
      });
      result(null, deleteFavorites);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Favorites.removeAll = async (result) => {
   try {
      const deleteAllFavorites = await prismaInstance.favorites.deleteMany({});
      result(null, deleteAllFavorites);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Favorites;
