const CourseVideo = require("../models/courseVideo.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const courseVideo = new CourseVideo({
      videoTitle: req.body.videoTitle,
      videoLink: req.body.videoLink,
      secondVideoLink: req.body.secondVideoLink,
      videoDescription: req.body.videoDescription,
      courseId: req.body.courseId,
      createdBy: req.body.createdBy,
      unlockAt: req.body.unlockAt,
      secondVideoLink: req.body.secondVideoLink,
   });

   CourseVideo.create(courseVideo, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   CourseVideo.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   CourseVideo.findById(req.params.id, (err, data) => {
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

   CourseVideo.updateById(
      req.params.id,
      new CourseVideo(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   CourseVideo.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `CourseVideo was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   CourseVideo.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All CourseVideos were deleted successfully!` });
   });
};
