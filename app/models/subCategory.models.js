const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const SubCategory = function (subCategory) {
   this.subCategoryName = subCategory.subCategoryName;
   this.categoryId = subCategory.categoryId;
};

SubCategory.create = async (newSubCategory, result) => {
   try {
      const subCategory = await prismaInstance.subCategory.create({
         data: newSubCategory,
      });

      result(null, subCategory);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

SubCategory.findById = async (subCategoryId, result) => {
   try {
      const singleSubCategory = await prismaInstance.subCategory.findUnique({
         where: {
            idSubCategory: JSON.parse(subCategoryId),
         },
      });

      if (singleSubCategory) {
         result(null, singleSubCategory);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found SubCategory with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

SubCategory.getAll = async (result) => {
   try {
      const subCategories = await prismaInstance.subCategory.findMany();
      result(null, subCategories);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

SubCategory.updateById = async (subCategoryId, subCategory, result) => {
   try {
      const updateSubCategory = await prismaInstance.subCategory.update({
         where: { idSubCategory: JSON.parse(subCategoryId) },
         data: subCategory,
      });
      result(null, updateSubCategory);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

SubCategory.remove = async (id, result) => {
   try {
      const deleteSubCategory = await prismaInstance.subCategory.delete({
         where: { idSubCategory: JSON.parse(id) },
      });
      result(null, deleteSubCategory);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

SubCategory.removeAll = async (result) => {
   try {
      const deleteAllSubCategories =
         await prismaInstance.subCategory.deleteMany({});
      result(null, deleteAllSubCategories);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = SubCategory;
