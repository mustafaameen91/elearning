const StudentInfo = require("../models/studentInfo.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const studentInfo = new StudentInfo({
      schoolName: req.body.schoolName,
      grade: req.body.grade,
      dob: req.body.dob,
      subCategoryId: req.body.subCategoryId,
      userId: req.body.userId,
   });

   StudentInfo.create(studentInfo, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   StudentInfo.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   StudentInfo.findById(req.params.id, (err, data) => {
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

   StudentInfo.updateById(
      req.params.id,
      new StudentInfo(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   StudentInfo.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `StudentInfo was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   StudentInfo.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All StudentInfos were deleted successfully!` });
   });
};
