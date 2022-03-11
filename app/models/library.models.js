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

      let studentsCourse = await prismaInstance.course.findUnique({
         where: {
            idCourse: parseInt(library.courseId),
         },
         include: {
            StudentCourse: {
               include: {
                  student: {
                     include: {
                        user: true,
                     },
                  },
               },
            },
         },
      });

      if (studentsCourse.StudentCourse.length > 0) {
         let students = studentsCourse.StudentCourse.filter((student) => {
            if (student.statusId != 1) {
               return student;
            }
         });
         let playerIds = students.map(
            (student) => student.student.user.playerId
         );

         let players = playerIds.filter((player) => {
            if (player != null || player != undefined || player != "") {
               return player;
            }
         });

         var message = {
            app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
            headings: { en: `نزلت ملزمة جديدة` },
            contents: {
               en: `نزلت ملزمة جديدة بكورس ${studentsCourse.courseTitle} ، روح اقراها ياشاطر`,
            },
            include_player_ids: players,
         };
         if (players.length > 0) {
            notification(message);
         }
      }

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
