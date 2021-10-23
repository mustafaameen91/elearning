const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const VideoAttachment = function (videoAttachment) {
   this.attachmentTitle = videoAttachment.attachmentTitle;
   this.attachmentPath = videoAttachment.attachmentPath;
   this.videoId = videoAttachment.videoId;
   this.createdBy = videoAttachment.createdBy;
};

VideoAttachment.create = async (newVideoAttachment, result) => {
   try {
      const videoAttachment = await prismaInstance.videoAttachment.create({
         data: newVideoAttachment,
      });

      result(null, videoAttachment);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

VideoAttachment.findById = async (videoAttachmentId, result) => {
   try {
      const singleVideoAttachment =
         await prismaInstance.videoAttachment.findUnique({
            where: {
               idVideoAttachment: JSON.parse(videoAttachmentId),
            },
         });

      if (singleVideoAttachment) {
         result(null, singleVideoAttachment);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Video Attachment with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

VideoAttachment.getAll = async (result) => {
   try {
      const videoAttachments = await prismaInstance.videoAttachment.findMany();
      result(null, videoAttachments);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

VideoAttachment.updateById = async (
   videoAttachmentId,
   videoAttachment,
   result
) => {
   try {
      const updateVideoAttachment = await prismaInstance.videoAttachment.update(
         {
            where: { idVideoAttachment: JSON.parse(videoAttachmentId) },
            data: videoAttachment,
         }
      );
      result(null, updateVideoAttachment);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

VideoAttachment.remove = async (id, result) => {
   try {
      const deleteVideoAttachment = await prismaInstance.videoAttachment.delete(
         {
            where: { idVideoAttachment: JSON.parse(id) },
         }
      );
      result(null, deleteVideoAttachment);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

VideoAttachment.removeAll = async (result) => {
   try {
      const deleteAllVideoAttachments =
         await prismaInstance.videoAttachment.deleteMany({});
      result(null, deleteAllVideoAttachments);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = VideoAttachment;
