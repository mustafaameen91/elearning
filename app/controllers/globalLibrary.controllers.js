const GlobalLibrary = require("../models/globalLibrary.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const globalLibrary = new GlobalLibrary({
      title: req.body.title,
      subTitle: req.body.subTitle,
      documentPath: req.body.documentPath,
      downloaded: req.body.downloaded,
      createdBy: req.body.createdBy,
   });

   GlobalLibrary.create(globalLibrary, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   GlobalLibrary.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findAllPaginated = (req, res) => {
   let limit = req.query.limit * 1;
   let page = req.query.page * 1;

   let searchTerm = {
      skip: page == 1 ? 0 : limit * page,
      take: limit,
      page: page,
   };

   GlobalLibrary.getAllPagination(searchTerm, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   GlobalLibrary.findById(req.params.id, (err, data) => {
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

   GlobalLibrary.updateById(
      req.params.id,
      new GlobalLibrary(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   GlobalLibrary.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `GlobalLibrary was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   GlobalLibrary.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All Global Libraries were deleted successfully!`,
         });
   });
};
