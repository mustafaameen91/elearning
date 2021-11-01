// mysql password : Ee123123!@
// CREATE USER 'learn'@'%' IDENTIFIED WITH authentication_plugin BY 'Ee123123!@';
// CREATE USER 'learn'@'%' IDENTIFIED BY 'Ee123123!@';
// ALTER USER 'learn'@'%' IDENTIFIED WITH mysql_native_password BY 'Ee123123!@';
// GRANT ALL PRIVILEGES ON *.* TO 'learn'@'%' WITH GRANT OPTION;

const Course = require("../models/course.models.js");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const course = new Course({
      courseTitle: req.body.courseTitle,
      courseDescription: req.body.courseDescription,
      courseRate: req.body.courseRate,
      coursePrice: req.body.coursePrice,
      classId: req.body.classId,
      coursePath: req.body.coursePath,
      createdBy: req.body.createdBy,
      subjectId: req.body.subjectId,
      platformPrice: req.body.platformPrice,
   });

   Course.create(course, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findAll = (req, res) => {
   Course.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findByFilterCourse = (req, res) => {
   let filtered = {};
   let limit = 1000;
   let order = { idCourse: "asc" };

   if (req.query.limit) {
      limit = req.query.limit;
   }

   if (req.query.order) {
      let data = req.query.order.split(":");
      delete order[order.idCourse];
      order[data[0]] = data[1];
   }

   if (req.query.courseTitle) {
      filtered.courseTitle = {
         contains: req.query.courseTitle,
      };
   }

   if (req.query.createdBy) {
      filtered.createdBy = req.query.createdBy * 1;
   }

   if (req.query.subjectId) {
      filtered.subjectId = req.query.subjectId * 1;
   }

   if (req.query.classId) {
      filtered.classId = req.query.classId * 1;
   }

   Course.getByFilterCourse(filtered, limit, order, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findByClassId = (req, res) => {
   Course.getByClassId(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   Course.findById(req.params.id, (err, data) => {
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

   Course.updateById(req.params.id, new Course(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   Course.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `Course was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   Course.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Courses were deleted successfully!` });
   });
};
