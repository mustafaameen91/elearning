const Setting = require("../models/setting.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.setting(400).send({
         message: "Content can not be empty!",
      });
   }

   const setting = new Setting({
      inReview: req.body.inReview,
      lang: req.body.lang,
      version: req.body.version,
   });

   Setting.create(setting, (err, data) => {
      if (err) res.setting(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Setting.getAll((err, data) => {
      if (err) res.setting(err.code).send(err);
      else res.send(data);
   });
};

exports.checkVersion = (req, res) => {
   Setting.getVersion((err, data) => {
      if (err) res.setting(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Setting.findById(req.params.id, (err, data) => {
      if (err) res.setting(err.code).send(err);
      else res.send(data);
   });
};

exports.update = (req, res) => {
   if (!req.body) {
      res.setting(400).send({
         message: "Content can not be empty!",
      });
   }

   Setting.updateById(req.params.id, new Setting(req.body), (err, data) => {
      if (err) res.setting(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Setting.remove(req.params.id, (err, data) => {
      if (err) res.setting(err.code).send(err);
      else res.send({ message: `Setting was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Setting.removeAll((err, data) => {
      if (err) res.setting(err.code).send(err);
      else res.send({ message: `All Settings were deleted successfully!` });
   });
};
