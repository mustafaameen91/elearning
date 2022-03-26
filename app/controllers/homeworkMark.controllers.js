const HomeworkMark = require("../models/homeworkMark.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const homeworkMark = new HomeworkMark({
      userId: req.body.userId,
      homeworkId: req.body.homeworkId,
      mark: req.body.mark,
   });

   HomeworkMark.create(homeworkMark, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   HomeworkMark.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   HomeworkMark.findById(req.params.id, (err, data) => {
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

   HomeworkMark.updateById(
      req.params.id,
      new HomeworkMark(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   HomeworkMark.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `HomeworkMark was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   HomeworkMark.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `All HomeworkMarks were deleted successfully!` });
   });
};
