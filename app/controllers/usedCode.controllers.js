const UsedCode = require("../models/usedCode.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const usedCode = new UsedCode({
      promoId: req.body.promoId,
      userId: req.body.userId,
   });

   UsedCode.create(usedCode, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   UsedCode.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   UsedCode.findById(req.params.id, (err, data) => {
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

   UsedCode.updateById(req.params.id, new UsedCode(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   UsedCode.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `UsedCode was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   UsedCode.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All UsedCodes were deleted successfully!` });
   });
};
