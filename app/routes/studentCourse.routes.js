module.exports = (app) => {
   const studentCourse = require("../controllers/studentCourse.controllers.js");

   app.post("/api/addStudentCourse", studentCourse.create);

   app.get("/api/studentCourses", studentCourse.findAll);

   app.get("/api/studentCourse/:id", studentCourse.findOne);

   app.get("/api/studentIdCourse/:id", studentCourse.findAllByStudentId);

   app.get("/api/checkCourseStatus", studentCourse.findByStudentId);

   app.get("/api/courseForStudent/:studentId", studentCourse.findForStudent);

   app.get(
      "/api/distributorCourseDetails",
      studentCourse.findAllByCourseIdAndDist
   );

   app.get("/api/courseDetails/:id", studentCourse.findAllByCourseId);

   app.get(
      "/api/coursesForStudent/:studentId",
      studentCourse.findStudentCourses
   );

   app.put("/api/studentCourse/:id", studentCourse.update);

   app.delete("/api/studentCourse/:id", studentCourse.delete);

   app.delete("/api/studentCourses", studentCourse.deleteAll);
};
