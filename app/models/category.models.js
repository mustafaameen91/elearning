const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Category = function (category) {
   this.categoryName = category.categoryName;
   this.categoryImage = category.categoryImage;
};

Category.create = async (newCategory, result) => {
   try {
      const category = await prismaInstance.category.create({
         data: newCategory,
      });

      result(null, category);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Category.findById = async (categoryId, result) => {
   try {
      const singleCategory = await prismaInstance.category.findUnique({
         where: {
            idCategory: JSON.parse(categoryId),
         },
      });

      if (singleCategory) {
         result(null, singleCategory);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Category with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Category.getAll = async (result) => {
   try {
      const categories = await prismaInstance.category.findMany();
      result(null, categories);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Category.updateById = async (categoryId, category, result) => {
   try {
      const updateCategory = await prismaInstance.category.update({
         where: { idCategory: JSON.parse(categoryId) },
         data: category,
      });
      result(null, updateCategory);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Category.remove = async (id, result) => {
   try {
      const deleteCategory = await prismaInstance.category.delete({
         where: { idCategory: JSON.parse(id) },
      });
      result(null, deleteCategory);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Category.removeAll = async (result) => {
   try {
      const deleteAllCategories = await prismaInstance.category.deleteMany({});
      result(null, deleteAllCategories);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Category;
