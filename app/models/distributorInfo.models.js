const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const DistributorInfo = function (distributorInfo) {
   this.lang = distributorInfo.lang;
   this.lat = distributorInfo.lat;
   this.libraryName = distributorInfo.libraryName;
   this.distributorPhoto = distributorInfo.distributorPhoto;
   this.distributorBio = distributorInfo.distributorBio;
   this.userId = distributorInfo.userId;
};

DistributorInfo.create = async (newDistributorInfo, result) => {
   try {
      const distributorInfo = await prismaInstance.distributorInfo.create({
         data: newDistributorInfo,
      });

      result(null, distributorInfo);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

DistributorInfo.findById = async (distributorInfoId, result) => {
   try {
      const singleDistributorInfo =
         await prismaInstance.distributorInfo.findUnique({
            where: {
               idDistributor: JSON.parse(distributorInfoId),
            },
         });

      if (singleDistributorInfo) {
         result(null, singleDistributorInfo);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Distributor Info with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

DistributorInfo.getAll = async (result) => {
   try {
      const distributorInfos = await prismaInstance.distributorInfo.findMany();
      result(null, distributorInfos);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

DistributorInfo.updateById = async (
   distributorInfoId,
   distributorInfo,
   result
) => {
   try {
      const updateDistributorInfo = await prismaInstance.distributorInfo.update(
         {
            where: { idDistributor: JSON.parse(distributorInfoId) },
            data: distributorInfo,
         }
      );
      result(null, updateDistributorInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

DistributorInfo.remove = async (id, result) => {
   try {
      const deleteDistributorInfo = await prismaInstance.distributorInfo.delete(
         {
            where: { idDistributor: JSON.parse(id) },
         }
      );
      result(null, deleteDistributorInfo);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

DistributorInfo.removeAll = async (result) => {
   try {
      const deleteAllDistributorInfos =
         await prismaInstance.distributorInfo.deleteMany({});
      result(null, deleteAllDistributorInfos);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = DistributorInfo;
