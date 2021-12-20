const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");

const Subject = function (subject) {
   this.subjectName = subject.subjectName;
   this.subjectImage = subject.subjectImage;
   this.classId = subject.classId;
   this.createdBy = subject.createdBy;
};

Subject.create = async (newSubject, result) => {
   try {
      const subject = await prismaInstance.subject.create({
         data: newSubject,
      });

      result(null, subject);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Subject.findById = async (subjectId, result) => {
   try {
      const singleSubject = await prismaInstance.subject.findUnique({
         where: {
            idSubject: JSON.parse(subjectId),
         },
      });

      if (singleSubject) {
         result(null, singleSubject);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Subject with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Subject.getAll = async (result) => {
   try {
      const subjects = await prismaInstance.subject.findMany({
         include: {
            class: true,
         },
      });
      result(null, subjects);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Subject.updateById = async (subjectId, subject, result) => {
   try {
      const updateSubject = await prismaInstance.subject.update({
         where: { idSubject: JSON.parse(subjectId) },
         data: subject,
      });
      result(null, updateSubject);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Subject.remove = async (id, result) => {
   try {
      const deleteSubject = await prismaInstance.subject.delete({
         where: { idSubject: JSON.parse(id) },
      });
      result(null, deleteSubject);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Subject.removeAll = async (result) => {
   try {
      const deleteAllSubjects = await prismaInstance.subject.deleteMany({});
      result(null, deleteAllSubjects);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Subject;
