const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Setting = function (setting) {
   this.inReview = setting.inReview;
   this.lang = setting.lang;
   this.version = setting.version;
};

Setting.create = async (newSetting, result) => {
   try {
      const setting = await prismaInstance.setting.create({
         data: newSetting,
      });

      result(null, setting);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Setting.findById = async (settingId, result) => {
   try {
      const singleSetting = await prismaInstance.setting.findUnique({
         where: {
            idSetting: JSON.parse(settingId),
         },
      });

      if (singleSetting) {
         result(null, singleSetting);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Setting with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Setting.getVersion = async (result) => {
   try {
      const settings = await prismaInstance.setting.findMany();
      result(null, { version: settings[0].version });
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Setting.getAll = async (result) => {
   try {
      const settings = await prismaInstance.setting.findMany();
      result(null, settings);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Setting.updateById = async (settingId, setting, result) => {
   try {
      const updateSetting = await prismaInstance.setting.update({
         where: { idSetting: JSON.parse(settingId) },
         data: setting,
      });
      result(null, updateSetting);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Setting.remove = async (id, result) => {
   try {
      const deleteSetting = await prismaInstance.setting.delete({
         where: { idSetting: JSON.parse(id) },
      });
      result(null, deleteSetting);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Setting.removeAll = async (result) => {
   try {
      const deleteAllSetting = await prismaInstance.setting.deleteMany({});
      result(null, deleteAllSetting);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Setting;
