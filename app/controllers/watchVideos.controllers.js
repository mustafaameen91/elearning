const WatchVideos = require("../models/watchVideos.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const watchVideos = new WatchVideos({
      userId: req.body.userId,
      videoId: req.body.videoId,
   });

   WatchVideos.create(watchVideos, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   WatchVideos.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   WatchVideos.findById(req.params.id, (err, data) => {
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

   WatchVideos.updateById(
      req.params.id,
      new WatchVideos(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   WatchVideos.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `WatchVideos was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   WatchVideos.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All WatchVideos were deleted successfully!` });
   });
};
