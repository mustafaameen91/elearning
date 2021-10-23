const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const VideoComment = function (videoComment) {
   this.userComment = videoComment.userComment;
   this.commentTime = videoComment.commentTime;
   this.videoId = videoComment.videoId;
   this.parentId = videoComment.parentId;
   this.createdBy = videoComment.createdBy;
};

VideoComment.create = async (newVideoComment, result) => {
   try {
      const videoComment = await prismaInstance.videoComment.create({
         data: newVideoComment,
      });

      result(null, videoComment);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

VideoComment.findById = async (videoCommentId, result) => {
   try {
      const singleVideoComment = await prismaInstance.videoComment.findUnique({
         where: {
            idVideoComment: JSON.parse(videoCommentId),
         },
      });

      if (singleVideoComment) {
         result(null, singleVideoComment);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Video Comment with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

VideoComment.getAll = async (result) => {
   try {
      const videoComments = await prismaInstance.videoComment.findMany();
      result(null, videoComments);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

VideoComment.updateById = async (videoCommentId, videoComment, result) => {
   try {
      const updateVideoComment = await prismaInstance.videoComment.update({
         where: { idVideoComment: JSON.parse(videoCommentId) },
         data: videoComment,
      });
      result(null, updateVideoComment);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

VideoComment.remove = async (id, result) => {
   try {
      const deleteVideoComment = await prismaInstance.videoComment.delete({
         where: { idVideoComment: JSON.parse(id) },
      });
      result(null, deleteVideoComment);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

VideoComment.removeAll = async (result) => {
   try {
      const deleteAllVideoComments =
         await prismaInstance.videoComment.deleteMany({});
      result(null, deleteAllVideoComments);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = VideoComment;
