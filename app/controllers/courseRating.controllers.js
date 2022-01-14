const CourseRating = require("../models/courseRating.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const courseRating = new CourseRating({
      courseId: req.body.courseId,
      userId: req.body.userId,
      rate: req.body.rate,
   });

   CourseRating.create(courseRating, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   CourseRating.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   CourseRating.findById(req.params.id, (err, data) => {
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

   CourseRating.updateById(
      req.params.id,
      new CourseRating(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   CourseRating.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `CourseRating was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   CourseRating.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `All CourseRatings were deleted successfully!` });
   });
};
