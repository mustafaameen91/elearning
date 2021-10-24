const Subject = require("../models/subject.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const subject = new Subject({
      subjectName: req.body.subjectName,
      subjectImage: req.body.subjectImage,
      classId: req.body.classId,
      createdBy: req.body.createdBy,
   });

   Subject.create(subject, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Subject.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Subject.findById(req.params.id, (err, data) => {
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

   Subject.updateById(req.params.id, new Subject(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Subject.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Subject was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Subject.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Subjects were deleted successfully!` });
   });
};
