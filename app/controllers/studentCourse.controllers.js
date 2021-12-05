const StudentCourse = require("../models/studentCourse.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   if (req.body.promoCodeId) {
      StudentCourse.createWithPromo(req.body, (err, data) => {
         if (err) res.status(err.code).send(err);
         else {
            res.send(data);
         }
      });
   } else {
      const studentCourse = new StudentCourse({
         studentId: req.body.studentId,
         courseId: req.body.courseId,
         statusId: 1,
         distributorId: req.body.distributorId,
         discount: 0,
      });

      StudentCourse.create(studentCourse, (err, data) => {
         if (err) res.status(err.code).send(err);
         else {
            res.send(data);
         }
      });
   }
};

exports.findAll = (req, res) => {
   StudentCourse.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findAllByCourseId = (req, res) => {
   StudentCourse.getAllByCourseId(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};
exports.findStudentCourses = (req, res) => {
   StudentCourse.getStudentCourses(req.params.studentId, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findByStudentId = (req, res) => {
   StudentCourse.getByStudentId(
      req.query.courseId,
      req.query.studentId,
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.findOne = (req, res) => {
   StudentCourse.findById(req.params.id, (err, data) => {
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

   StudentCourse.updateById(
      req.params.id,
      new StudentCourse(req.body),
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else res.send(data);
      }
   );
};

exports.delete = (req, res) => {
   StudentCourse.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `StudentCourse was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   StudentCourse.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else
         res.send({ message: `All StudentCourses were deleted successfully!` });
   });
};
