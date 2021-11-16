const VideoComment = require("../models/videoComment.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const videoComment = new VideoComment({
      userComment: req.body.userComment,
      commentTime: req.body.commentTime,
      videoId: req.body.videoId,
      parentId: req.body.parentId,
      createdBy: req.body.createdBy,
   });

   VideoComment.create(videoComment, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   VideoComment.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOneByVideoId = (req, res) => {
   VideoComment.findByVideoId(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   VideoComment.findById(req.params.id, (err, data) => {
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

   VideoComment.updateById(
      req.params.id,
      new VideoComment(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   VideoComment.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Video Comment was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   VideoComment.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `All Video Comments were deleted successfully!` });
   });
};
