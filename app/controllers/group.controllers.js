const Group = require("../models/group.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.group(400).send({
         message: "Content can not be empty!",
      });
   }

   const group = new Group({
      groupName: req.body.groupName,
      courseId: req.body.courseId,
   });

   Group.create(group, (err, data) => {
      if (err) res.group(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Group.getAll((err, data) => {
      if (err) res.group(err.code).send(err);
      else res.send(data);
   });
};

exports.findAllByCourseId = (req, res) => {
   Group.findByIdCourseId(req.params.id, (err, data) => {
      if (err) res.group(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Group.findById(req.params.id, (err, data) => {
      if (err) res.group(err.code).send(err);
      else res.send(data);
   });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.group(400).send({
         message: "Content can not be empty!",
      });
   }

   Group.updateById(req.params.id, new Group(req.body), (err, data) => {
      if (err) res.group(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Group.remove(req.params.id, (err, data) => {
      if (err) res.group(err.code).send(err);
      else res.send({ message: `Group was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Group.removeAll((err, data) => {
      if (err) res.group(err.code).send(err);
      else res.send({ message: `All Groups were deleted successfully!` });
   });
};
