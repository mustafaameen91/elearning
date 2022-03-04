const StudentGroup = require("../models/studentGroup.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.studentGroup(400).send({
         message: "Content can not be empty!",
      });
   }

   const studentGroup = new StudentGroup({
      studentId: req.body.studentId,
      groupId: req.body.groupId,
   });

   StudentGroup.create(studentGroup, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   StudentGroup.getAll((err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send(data);
   });
};

exports.findOneByGroupId = (req, res) => {
   StudentGroup.findByIdGroup(req.params.id, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   StudentGroup.findById(req.params.id, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send(data);
   });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.studentGroup(400).send({
         message: "Content can not be empty!",
      });
   }

   StudentGroup.updateById(
      req.params.id,
      new StudentGroup(req.body),
      (err, data) => {
         if (err) res.studentGroup(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   StudentGroup.remove(req.params.id, (err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else res.send({ message: `StudentGroup was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   StudentGroup.removeAll((err, data) => {
      if (err) res.studentGroup(err.code).send(err);
      else
         res.send({ message: `All StudentGroups were deleted successfully!` });
   });
};
