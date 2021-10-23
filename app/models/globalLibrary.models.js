const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const GlobalLibrary = function (globalLibrary) {
   this.title = globalLibrary.title;
   this.subTitle = globalLibrary.subTitle;
   this.documentPath = globalLibrary.documentPath;
   this.downloaded = globalLibrary.downloaded;
   this.createdBy = globalLibrary.createdBy;
};

GlobalLibrary.create = async (newGlobalLibrary, result) => {
   try {
      const globalLibrary = await prismaInstance.globalLibrary.create({
         data: newGlobalLibrary,
      });

      result(null, globalLibrary);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

GlobalLibrary.findById = async (globalLibraryId, result) => {
   try {
      const singleGlobalLibrary = await prismaInstance.globalLibrary.findUnique(
         {
            where: {
               idLibrary: JSON.parse(globalLibraryId),
            },
         }
      );

      if (singleGlobalLibrary) {
         result(null, singleGlobalLibrary);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Global Library with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

GlobalLibrary.getAll = async (result) => {
   try {
      const globalLibraries = await prismaInstance.globalLibrary.findMany();
      result(null, globalLibraries);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

GlobalLibrary.updateById = async (globalLibraryId, globalLibrary, result) => {
   try {
      const updateGlobalLibrary = await prismaInstance.globalLibrary.update({
         where: { idLibrary: JSON.parse(globalLibraryId) },
         data: globalLibrary,
      });
      result(null, updateGlobalLibrary);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

GlobalLibrary.remove = async (id, result) => {
   try {
      const deleteGlobalLibrary = await prismaInstance.globalLibrary.delete({
         where: { idLibrary: JSON.parse(id) },
      });
      result(null, deleteGlobalLibrary);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

GlobalLibrary.removeAll = async (result) => {
   try {
      const deleteAllGlobalLibraries =
         await prismaInstance.globalLibrary.deleteMany({});
      result(null, deleteAllGlobalLibraries);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = GlobalLibrary;
