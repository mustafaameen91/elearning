const CourseDistributor = require("../models/courseDistributor.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const courseDistributor = new CourseDistributor({
      courseId: req.body.courseId,
      distributorId: req.body.distributorId,
   });

   CourseDistributor.create(courseDistributor, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   CourseDistributor.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   CourseDistributor.findById(req.params.id, (err, data) => {
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

   CourseDistributor.updateById(
      req.params.id,
      new CourseDistributor(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   CourseDistributor.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `Course Distributor was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   CourseDistributor.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All Course Distributors were deleted successfully!`,
         });
   });
};