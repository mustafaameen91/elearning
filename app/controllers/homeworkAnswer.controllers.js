const HomeworkAnswer = require("../models/homeworkAnswer.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const homeworkAnswer = new HomeworkAnswer({
      homeworkId: req.body.homeworkId,
      userId: req.body.userId,
      answerPath: req.body.answerPath,
   });

   HomeworkAnswer.create(homeworkAnswer, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   HomeworkAnswer.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOneForStudent = (req, res) => {
   HomeworkAnswer.findByIdForStudent(
      req.query.userId,
      req.query.homeworkId,
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.findOne = (req, res) => {
   HomeworkAnswer.findById(req.params.id, (err, data) => {
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

   HomeworkAnswer.updateById(
      req.params.id,
      new HomeworkAnswer(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   HomeworkAnswer.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Homework Answer was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   HomeworkAnswer.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All Homework Answers were deleted successfully!`,
         });
   });
};
