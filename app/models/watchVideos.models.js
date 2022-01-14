const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const WatchVideos = function (watchVideos) {
   this.videoId = watchVideos.videoId;
   this.userId = watchVideos.userId;
};

WatchVideos.create = async (newWatchVideos, result) => {
   try {
      const watchVideos = await prismaInstance.watchVideos.create({
         data: newWatchVideos,
      });

      result(null, watchVideos);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

WatchVideos.findById = async (watchVideosId, result) => {
   try {
      const singleWatchVideos = await prismaInstance.watchVideos.findUnique({
         where: {
            idWatchVideos: JSON.parse(watchVideosId),
         },
      });

      if (singleWatchVideos) {
         result(null, singleWatchVideos);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found WatchVideos with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

WatchVideos.getAll = async (result) => {
   try {
      const watchVideos = await prismaInstance.watchVideos.findMany();
      result(null, watchVideos);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

WatchVideos.updateById = async (watchVideosId, watchVideos, result) => {
   try {
      const updateWatchVideos = await prismaInstance.watchVideos.update({
         where: { idWatchVideos: JSON.parse(watchVideosId) },
         data: watchVideos,
      });
      result(null, updateWatchVideos);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

WatchVideos.remove = async (id, result) => {
   try {
      const deleteWatchVideos = await prismaInstance.watchVideos.delete({
         where: { idWatchVideos: JSON.parse(id) },
      });
      result(null, deleteWatchVideos);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

WatchVideos.removeAll = async (result) => {
   try {
      const deleteAllWatchVideos = await prismaInstance.watchVideos.deleteMany(
         {}
      );
      result(null, deleteAllWatchVideos);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = WatchVideos;
