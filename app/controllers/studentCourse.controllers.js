const StudentCourse = require("../models/studentCourse.models.js");
const notification = require("../notifications/notification.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   if (req.body.promoCodeId) {
      StudentCourse.createWithPromo(req.body, (err, data) => {
         if (err) res.status(err.code).send(err);
         else {
            res.send(data);
         }
      });
   } else if (req.body.statusId) {
      const studentCourse = new StudentCourse({
         studentId: req.body.studentId,
         courseId: req.body.courseId,
         statusId: req.body.statusId,
         distributorId: req.body.distributorId,
         discount: 0,
      });

      StudentCourse.create(studentCourse, (err, data) => {
         if (err) res.status(err.code).send(err);
         else {
            res.send(data);
         }
      });
   } else {
      const studentCourse = new StudentCourse({
         studentId: req.body.studentId,
         courseId: req.body.courseId,
         statusId: 1,
         distributorId: req.body.distributorId,
         discount: 0,
      });

      StudentCourse.create(studentCourse, (err, data) => {
         if (err) res.status(err.code).send(err);
         else {
            res.send(data);
         }
      });
   }
};

exports.findAll = (req, res) => {
   StudentCourse.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findAllByCourseIdAndDist = (req, res) => {
   StudentCourse.findByIdDistAndCourse(
      {
         distributorId: parseInt(req.query.distributorId),
         courseId: parseInt(req.query.courseId),
      },
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};
exports.findAllByCourseIdForNotification = (req, res) => {
   StudentCourse.getAllByCourseIdForNotification(req.body.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         if (data.length > 0) {
            let players = data.filter((student) => {
               return (
                  student.student.user.playerId != "" ||
                  student.student.user.playerId != null ||
                  student.student.user.playerId != "0" ||
                  student.student.user.playerId != 0 ||
                  student.student.user.playerId != undefined ||
                  student.student.user.playerId != "undefined"
               );
            });
            console.log(players);

            let playerIds = players.map((player) => {
               return player.student.user.playerId;
            });

            var message = {
               app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
               headings: { en: `${req.body.title}` },
               contents: {
                  en: `${req.body.content}`,
               },
               include_player_ids: playerIds,
            };
            if (playerIds.length > 0) {
               notification(message);
               res.send({ text: "notification send" });
            }
         } else {
            res.status(404).send({
               text: "no students found to send notification",
            });
         }
      }
   });
};

exports.findAllByCourseId = (req, res) => {
   StudentCourse.getAllByCourseId(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};
exports.findStudentCourses = (req, res) => {
   StudentCourse.getStudentCourses(req.params.studentId, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findForStudent = (req, res) => {
   StudentCourse.getForStudent(req.params.studentId, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findByStudentId = (req, res) => {
   StudentCourse.getByStudentId(
      req.query.courseId,
      req.query.studentId,
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.findAllByStudentId = (req, res) => {
   StudentCourse.findByIdStudentId(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   StudentCourse.findById(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.updateManyStatus = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   StudentCourse.updateByIdManyStatus(req.body, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   StudentCourse.updateById(
      req.params.id,
      new StudentCourse(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   StudentCourse.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `StudentCourse was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   StudentCourse.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `All StudentCourses were deleted successfully!` });
   });
};
