const Homework = require("../models/homework.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const homework = new Homework({
      homeworkTitle: req.body.homeworkTitle,
      homeworkSubTitle: req.body.homeworkSubTitle,
      homeworkPath: req.body.homeworkPath,
      courseId: req.body.courseId,
      homeworkType: req.body.homeworkType,
      createdBy: req.body.createdBy,
   });

   Homework.create(homework, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Homework.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Homework.findById(req.params.id, (err, data) => {
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

   Homework.updateById(req.params.id, new Homework(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Homework.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `homework was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Homework.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All homeworks were deleted successfully!` });
   });
};
