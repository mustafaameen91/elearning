const Avatar = require("../models/avatar.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const avatar = new Avatar({
      imagePath: req.body.imagePath,
   });

   Avatar.create(avatar, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Avatar.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Avatar.findById(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.checkVersion = (req, res) => {
   res.send({ version: "1.0.0" });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   Avatar.updateById(req.params.id, new Avatar(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Avatar.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Avatar was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Avatar.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Avatars were deleted successfully!` });
   });
};
