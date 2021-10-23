const AssistanceTeacher = require("../models/assistanceTeacher.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const assistanceTeacher = new AssistanceTeacher({
      teacherId: req.body.teacherId,
      assistanceId: req.body.assistanceId,
   });

   AssistanceTeacher.create(assistanceTeacher, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   AssistanceTeacher.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   AssistanceTeacher.findById(req.params.id, (err, data) => {
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

   AssistanceTeacher.updateById(
      req.params.id,
      new AssistanceTeacher(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   AssistanceTeacher.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `Assistance Teacher was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   AssistanceTeacher.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All Assistance Teachers were deleted successfully!`,
         });
   });
};
