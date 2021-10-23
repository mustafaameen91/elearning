const TeacherInfo = require("../models/teacherInfo.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const teacherInfo = new TeacherInfo({
      specialty: req.body.specialty,
      schoolName: req.body.schoolName,
      photoPath: req.body.photoPath,
      bio: req.body.bio,
      userId: req.body.userId,
   });

   TeacherInfo.create(teacherInfo, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   TeacherInfo.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   TeacherInfo.findById(req.params.id, (err, data) => {
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

   TeacherInfo.updateById(
      req.params.id,
      new TeacherInfo(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   TeacherInfo.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `TeacherInfo was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   TeacherInfo.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All TeacherInfos were deleted successfully!` });
   });
};
