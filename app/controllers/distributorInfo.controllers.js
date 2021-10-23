const DistributorInfo = require("../models/distributorInfo.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const distributorInfo = new DistributorInfo({
      lang: req.body.lang,
      lat: req.body.lat,
      libraryName: req.body.libraryName,
      distributorPhoto: req.body.distributorPhoto,
      distributorBio: req.body.distributorBio,
      userId: req.body.userId,
   });

   DistributorInfo.create(distributorInfo, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   DistributorInfo.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   DistributorInfo.findById(req.params.id, (err, data) => {
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

   DistributorInfo.updateById(
      req.params.id,
      new DistributorInfo(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   DistributorInfo.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `DistributorInfo was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   DistributorInfo.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All DistributorInfos  were deleted successfully!`,
         });
   });
};
