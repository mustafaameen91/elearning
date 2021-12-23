const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Avatar = function (avatar) {
   this.imagePath = avatar.imagePath;
};

Avatar.create = async (newAvatar, result) => {
   try {
      const avatar = await prismaInstance.avatar.create({
         data: newAvatar,
      });

      result(null, avatar);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Avatar.findById = async (avatarId, result) => {
   try {
      const singleAvatar = await prismaInstance.avatar.findUnique({
         where: {
            idAvatar: JSON.parse(avatarId),
         },
      });

      if (singleAvatar) {
         result(null, singleAvatar);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Avatar with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Avatar.getAll = async (result) => {
   try {
      const avatars = await prismaInstance.avatar.findMany();
      result(null, avatars);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Avatar.updateById = async (avatarId, avatar, result) => {
   try {
      const updateAvatar = await prismaInstance.avatar.update({
         where: { idAvatar: JSON.parse(avatarId) },
         data: avatar,
      });
      result(null, updateAvatar);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Avatar.remove = async (id, result) => {
   try {
      const deleteAvatar = await prismaInstance.avatar.delete({
         where: { idAvatar: JSON.parse(id) },
      });
      result(null, deleteAvatar);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Avatar.removeAll = async (result) => {
   try {
      const deleteAllAvatar = await prismaInstance.avatar.deleteMany({});
      result(null, deleteAllAvatar);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Avatar;
