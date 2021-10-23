const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const UsedCode = function (usedCode) {
   this.promoId = usedCode.promoId;
   this.userId = usedCode.userId;
};

UsedCode.create = async (newUsedCode, result) => {
   try {
      const usedCode = await prismaInstance.usedCode.create({
         data: newUsedCode,
      });

      result(null, usedCode);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

UsedCode.findById = async (usedCodeId, result) => {
   try {
      const singleUsedCode = await prismaInstance.usedCode.findUnique({
         where: {
            idUsedCode: JSON.parse(usedCodeId),
         },
      });

      if (singleUsedCode) {
         result(null, singleUsedCode);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Used Code with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

UsedCode.getAll = async (result) => {
   try {
      const usedCodes = await prismaInstance.usedCode.findMany();
      result(null, usedCodes);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

UsedCode.updateById = async (usedCodeId, usedCode, result) => {
   try {
      const updateUsedCode = await prismaInstance.usedCode.update({
         where: { idUsedCode: JSON.parse(usedCodeId) },
         data: usedCode,
      });
      result(null, updateUsedCode);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

UsedCode.remove = async (id, result) => {
   try {
      const deleteUsedCode = await prismaInstance.usedCode.delete({
         where: { idUsedCode: JSON.parse(id) },
      });
      result(null, deleteUsedCode);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

UsedCode.removeAll = async (result) => {
   try {
      const deleteAllUsedCodes = await prismaInstance.usedCode.deleteMany({});
      result(null, deleteAllUsedCodes);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = UsedCode;
