const Favorites = require("../models/favorites.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const favorites = new Favorites({
      studentId: req.body.studentId,
      courseId: req.body.courseId,
   });

   Favorites.create(favorites, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findByStudentId = (req, res) => {
   Favorites.getByStudentId(req.parms.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findAll = (req, res) => {
   Favorites.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Favorites.findById(req.params.id, (err, data) => {
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

   Favorites.updateById(req.params.id, new Favorites(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Favorites.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Favorites was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Favorites.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Favorites were deleted successfully!` });
   });
};
