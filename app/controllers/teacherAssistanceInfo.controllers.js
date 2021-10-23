const TeacherAssistanceInfo = require("../models/teacherAssistanceInfo.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const teacherAssistanceInfo = new TeacherAssistanceInfo({
      financialDetails: req.body.financialDetails,
      userId: req.body.userId,
   });

   TeacherAssistanceInfo.create(teacherAssistanceInfo, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   TeacherAssistanceInfo.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   TeacherAssistanceInfo.findById(req.params.id, (err, data) => {
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

   TeacherAssistanceInfo.updateById(
      req.params.id,
      new TeacherAssistanceInfo(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   TeacherAssistanceInfo.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `Teacher AssistanceInfo was deleted successfully!`,
         });
   });
};

exports.deleteAll = (req, res) => {
   TeacherAssistanceInfo.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All Teacher AssistanceInfo were deleted successfully!`,
         });
   });
};
