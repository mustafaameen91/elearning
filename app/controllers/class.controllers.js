const Class = require("../models/class.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const studentClass = new Class({
      className: req.body.className,
      classImage: req.body.classImage,
   });

   Class.create(studentClass, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Class.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Class.findById(req.params.id, (err, data) => {
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

   Class.updateById(req.params.id, new Class(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Class.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Class was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Class.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Classes were deleted successfully!` });
   });
};
