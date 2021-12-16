const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const PromoCode = function (promoCode) {
   this.code = promoCode.code;
   this.usedCount = promoCode.usedCount;
   this.discountAmount = promoCode.discountAmount;
   this.userId = promoCode.userId;
   this.courseId = promoCode.courseId;
};

PromoCode.create = async (newPromoCode, result) => {
   try {
      const promoCode = await prismaInstance.promoCode.create({
         data: newPromoCode,
      });

      result(null, promoCode);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

PromoCode.createManyCodes = async (newPromoCode, result) => {
   try {
      const promoCode = await prismaInstance.promoCode.createMany({
         data: newPromoCode,
      });

      result(null, promoCode);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

PromoCode.findByIdTeacher = async (teacherId, result) => {
   try {
      const singlePromoCode = await prismaInstance.promoCode.findMany({
         where: {
            userId: parseInt(teacherId),
         },
      });

      if (singlePromoCode) {
         result(null, singlePromoCode);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found PromoCode with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

PromoCode.findById = async (promoCodeId, result) => {
   try {
      const singlePromoCode = await prismaInstance.promoCode.findUnique({
         where: {
            idPromoCode: JSON.parse(promoCodeId),
         },
      });

      if (singlePromoCode) {
         result(null, singlePromoCode);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found PromoCode with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

PromoCode.findByCode = async (promo, result) => {
   try {
      const singlePromoCode = await prismaInstance.promoCode.findMany({
         where: {
            AND: [
               {
                  code: promo.code,
               },
               {
                  usedCount: {
                     gt: 1,
                  },
               },
               {
                  courseId: promo.courseId,
               },
            ],
         },
      });

      if (singlePromoCode.length > 0) {
         result(null, singlePromoCode[0]);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found PromoCode with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

PromoCode.getAll = async (result) => {
   try {
      const promoCodes = await prismaInstance.promoCode.findMany({
         include: {
            UsedCode: {
               include: {
                  user: true,
               },
            },
            course: true,
            user: true,
         },
      });
      result(null, promoCodes);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

PromoCode.updateById = async (promoCodeId, promoCode, result) => {
   try {
      const updatePromoCode = await prismaInstance.promoCode.update({
         where: { idPromoCode: JSON.parse(promoCodeId) },
         data: promoCode,
      });
      result(null, updatePromoCode);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

PromoCode.remove = async (id, result) => {
   try {
      const deletePromoCode = await prismaInstance.promoCode.delete({
         where: { idPromoCode: JSON.parse(id) },
      });
      result(null, deletePromoCode);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

PromoCode.removeAll = async (result) => {
   try {
      const deleteAllPromoCodes = await prismaInstance.promoCode.deleteMany({});
      result(null, deleteAllPromoCodes);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = PromoCode;
