const StudentGroup = require("../models/studentGroup.models.js");
const notification = require("../notifications/notification.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.studentGroup(400).send({
         message: "Content can not be empty!",
      });
   }

   const studentGroup = new StudentGroup({
      studentId: req.body.studentId,
      groupId: req.body.groupId,
   });

   StudentGroup.create(studentGroup, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   StudentGroup.getAll((err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send(data);
   });
};

exports.findOneByGroupId = (req, res) => {
   StudentGroup.findByIdGroup(req.params.id, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send(data);
   });
};

exports.findAllByGroupId = (req, res) => {
   StudentGroup.findByIdOfGroup(req.body.id, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else {
         if (data.length > 0) {
            let players = data.filter((student) => {
               return (
                  student.user.playerId != "" ||
                  student.user.playerId != null ||
                  student.user.playerId != undefined ||
                  student.user.playerId != "undefined"
               );
            });

            let playerIds = players.map((player) => {
               return player.user.playerId;
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
               text: "no users found to send notification",
            });
         }

         // res.send(data);
      }
   });
};

exports.findOne = (req, res) => {
   StudentGroup.findById(req.params.id, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send(data);
   });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.studentGroup(400).send({
         message: "Content can not be empty!",
      });
   }

   StudentGroup.updateById(
      req.params.id,
      new StudentGroup(req.body),
      (err, data) => {
         if (err) res.studentGroup(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   StudentGroup.remove(req.params.id, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send({ message: `StudentGroup was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   StudentGroup.removeAll((err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else
         res.send({ message: `All StudentGroups were deleted successfully!` });
   });
};
