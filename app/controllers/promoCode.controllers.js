const PromoCode = require("../models/promoCode.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const promoCode = new PromoCode({
      code: req.body.code,
      usedCount: req.body.usedCount,
      discountAmount: req.body.discountAmount,
      userId: req.body.userId,
      courseId: req.body.courseId,
   });

   PromoCode.create(promoCode, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.createMany = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   PromoCode.createManyCodes(req.body, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   PromoCode.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   PromoCode.findById(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOneByCode = (req, res) => {
   PromoCode.findByCode(req.body, (err, data) => {
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

   PromoCode.updateById(req.params.id, new PromoCode(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   PromoCode.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `PromoCode was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   PromoCode.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All PromoCodes were deleted successfully!` });
   });
};
