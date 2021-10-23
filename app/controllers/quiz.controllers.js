const Quiz = require("../models/quiz.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const quiz = new Quiz({
      quizQuestion: req.body.quizQuestion,
      videoId: req.body.videoId,
      createdBy: req.body.createdBy,
   });

   Quiz.create(quiz, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Quiz.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Quiz.findById(req.params.id, (err, data) => {
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

   Quiz.updateById(req.params.id, new Quiz(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Quiz.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Quiz was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Quiz.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Quizzes were deleted successfully!` });
   });
};
