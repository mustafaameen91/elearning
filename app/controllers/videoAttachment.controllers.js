const VideoAttachment = require("../models/videoAttachment.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const videoAttachment = new VideoAttachment({
      attachmentTitle: req.body.attachmentTitle,
      attachmentPath: req.body.attachmentPath,
      videoId: req.body.videoId,
      createdBy: req.body.createdBy,
   });

   VideoAttachment.create(videoAttachment, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   VideoAttachment.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   VideoAttachment.findById(req.params.id, (err, data) => {
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

   VideoAttachment.updateById(
      req.params.id,
      new VideoAttachment(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   VideoAttachment.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `VideoAttachment was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   VideoAttachment.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({
            message: `All VideoAttachments were deleted successfully!`,
         });
   });
};
