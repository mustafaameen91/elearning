const StudentAchievement = require("../models/studentAchievement.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const studentAchievement = new StudentAchievement({
      courseId: req.body.courseId,
      average: req.body.average,
      userId: req.body.userId,
      shearing: req.body.shearing,
   });

   StudentAchievement.create(studentAchievement, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   StudentAchievement.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   StudentAchievement.findById(req.params.id, (err, data) => {
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

   StudentAchievement.updateById(
      req.params.id,
      new StudentAchievement(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   StudentAchievement.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `Student Achievement was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   StudentAchievement.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All Student Achievements were deleted successfully!`,
         });
   });
};
