const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Library = function (library) {
   this.title = library.title;
   this.subTitle = library.subTitle;
   this.documentPath = library.documentPath;
   this.downloaded = library.downloaded;
   this.courseId = library.courseId;
   this.createdBy = library.createdBy;
};

Library.create = async (newLibrary, result) => {
   try {
      const library = await prismaInstance.library.create({
         data: newLibrary,
      });

      result(null, library);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Library.findById = async (libraryId, result) => {
   try {
      const singleLibrary = await prismaInstance.library.findUnique({
         where: {
            idLibrary: JSON.parse(libraryId),
         },
      });

      if (singleLibrary) {
         result(null, singleLibrary);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Library with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Library.getAll = async (result) => {
   try {
      const libraries = await prismaInstance.library.findMany();
      result(null, libraries);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Library.updateById = async (libraryId, library, result) => {
   try {
      const updateLibrary = await prismaInstance.library.update({
         where: { idLibrary: JSON.parse(libraryId) },
         data: library,
      });
      result(null, updateLibrary);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Library.remove = async (id, result) => {
   try {
      const deleteLibrary = await prismaInstance.library.delete({
         where: { idLibrary: JSON.parse(id) },
      });
      result(null, deleteLibrary);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Library.removeAll = async (result) => {
   try {
      const deleteAllLibraries = await prismaInstance.library.deleteMany({});
      result(null, deleteAllLibraries);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Library;
