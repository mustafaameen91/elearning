const Library = require("../models/library.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const library = new Library({
      title: req.body.title,
      subTitle: req.body.subTitle,
      documentPath: req.body.documentPath,
      downloaded: req.body.downloaded,
      courseId: req.body.courseId,
      createdBy: req.body.createdBy,
   });

   Library.create(library, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Library.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Library.findById(req.params.id, (err, data) => {
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

   Library.updateById(req.params.id, new Library(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Library.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Library was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Library.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Libraries were deleted successfully!` });
   });
};
