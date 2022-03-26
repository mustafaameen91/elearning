const {
   prismaErrorHandling,
   prismaInstance,
} = require("./../middleware/handleError.middleware.js");
const notification = require("./../notifications/notification.js");

const Homework = function (homework) {
   this.homeworkTitle = homework.homeworkTitle;
   this.homeworkSubTitle = homework.homeworkSubTitle;
   this.homeworkPath = homework.homeworkPath;
   this.courseId = homework.courseId;
   this.homeworkType = homework.homeworkType;
   this.expireDate = homework.expireDate;
   this.createdBy = homework.createdBy;
};

Homework.create = async (newHomework, result) => {
   try {
      const homework = await prismaInstance.homework.create({
         data: newHomework,
      });

      let studentsCourse = await prismaInstance.course.findUnique({
         where: {
            idCourse: parseInt(homework.courseId),
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
            headings: { en: `تم اضافة واجب جديد` },
            contents: {
               en: `تم اضافة واجب جديد الى كورس ${studentsCourse.courseTitle}`,
            },
            include_player_ids: players,
         };
         if (players.length > 0) {
            notification(message);
         }
      }

      result(null, homework);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Homework.findById = async (homeworkId, result) => {
   try {
      const singleHomework = await prismaInstance.homework.findUnique({
         where: {
            idHomework: JSON.parse(homeworkId),
         },
      });

      if (singleHomework) {
         result(null, singleHomework);
      } else {
         result({
            error: "Not Found",
            code: 404,
            errorMessage: "Not Found Homework with this Id",
         });
      }
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Homework.getAll = async (result) => {
   try {
      const homeworks = await prismaInstance.homework.findMany();
      result(null, homeworks);
   } catch (err) {
      console.log(prismaErrorHandling(err));
      result(prismaErrorHandling(err), null);
   }
};

Homework.updateById = async (homeworkId, homework, result) => {
   try {
      const updateHomework = await prismaInstance.homework.update({
         where: { idHomework: JSON.parse(homeworkId) },
         data: homework,
      });
      result(null, updateHomework);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Homework.remove = async (id, result) => {
   try {
      const deleteHomework = await prismaInstance.homework.delete({
         where: { idHomework: JSON.parse(id) },
      });
      result(null, deleteHomework);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

Homework.removeAll = async (result) => {
   try {
      const deleteAllHomeworks = await prismaInstance.homework.deleteMany({});
      result(null, deleteAllHomeworks);
   } catch (error) {
      console.log(prismaErrorHandling(error));
      result(prismaErrorHandling(error), null);
   }
};

module.exports = Homework;
