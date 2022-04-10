const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Class = function (studentClass) {
   this.className = studentClass.className;
   this.classImage = studentClass.classImage;
};

Class.create = async (newClass, result) => {
   try {
      const studentClass = await prismaInstance.class.create({
         data: newClass,
      });

      result(null, studentClass);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Class.findById = async (classId, result) => {
   try {
      const singleClass = await prismaInstance.class.findUnique({
         where: {
            idClass: JSON.parse(classId),
         },
         include: {
            Subject: true,
         },
      });

      if (singleClass) {
         result(null, singleClass);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Class with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Class.getAll = async (result) => {
   try {
      const classes = await prismaInstance.class.findMany({
         where: {
            idClass: {
               not: 9,
            },
         },
         include: {
            Subject: true,
         },
      });
      result(null, classes);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Class.updateById = async (classId, studentClass, result) => {
   try {
      const updateClass = await prismaInstance.class.update({
         where: { idClass: JSON.parse(classId) },
         data: studentClass,
      });
      result(null, updateClass);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Class.remove = async (id, result) => {
   try {
      const deleteClass = await prismaInstance.class.delete({
         where: { idClass: JSON.parse(id) },
      });
      result(null, deleteClass);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Class.removeAll = async (result) => {
   try {
      const deleteAllClasses = await prismaInstance.class.deleteMany({});
      result(null, deleteAllClasses);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Class;
