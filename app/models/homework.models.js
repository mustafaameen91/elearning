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
   this.expireDate = new Date(homework.expireDate);
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
            (student) => student.student.user.playerId,
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
         include: {
            HomeworkAnswer: {
               include: { user: { include: { HomeWorkMark: true } } },
            },
         },
      });

      if (singleHomework) {
         const homeworkAnswers = await prismaInstance.homeworkAnswer.groupBy({
            by: ["userId"],
            where: {
               homeworkId: JSON.parse(homeworkId),
            },
         });

         let data = homeworkAnswers.map((student) => {
            let studentInformation = singleHomework.HomeworkAnswer.filter(
               (homework) => homework.userId === student.userId,
            );
            return {
               userName: studentInformation[0].user.userName,
               homeworkMark: studentInformation[0].user.HomeWorkMark,
               homeworkAnswer: singleHomework.HomeworkAnswer.filter(
                  (homework) => homework.userId === student.userId,
               ),
            };
         });

         let formattedData = {
            homework: singleHomework,
            students: data,
         };

         result(null, formattedData);
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

Homework.getAllFromHomework = async (homeworkId, result) => {
   try {
      const homework =
         await prismaInstance.$queryRaw`SELECT * ,  (SELECT  JSON_ARRAYAGG(JSON_OBJECT('idHomeworkAnswer',homeworkAnswer.idHomeworkAnswer , 'userId' , homeworkAnswer.userId , "createdAt", homeworkAnswer.createdAt , "idHomeworkMark" ,HomeWorkMark.idHomeworkMark , "mark",HomeWorkMark.mark , "createdAtMark",HomeWorkMark.createdAt )) FROM HomeworkAnswer LEFT JOIN HomeWorkMark ON homeworkAnswer.userId =  HomeWorkMark.userId  AND  HomeWorkMark.homeworkId = ${homeworkId} WHERE homeworkAnswer.homeworkId = ${homeworkId})  students FROM Homework WHERE idHomework = ${homeworkId}`;

      if (homework) {
         let filtered = homework[0].students.filter(
            (v, i, a) => a.findIndex((v2) => v2.userId === v.userId) === i,
         );
         homework[0].students = filtered;

         result(null, homework[0]);
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
