module.exports = (app) => {
   const studentCourse = require("../controllers/studentCourse.controllers.js");

   app.post("/api/addStudentCourse", studentCourse.create);

   app.get("/api/studentCourses", studentCourse.findAll);

   app.get("/api/studentCourse/:id", studentCourse.findOne);

   app.get("/api/checkCourseStatus", studentCourse.findByStudentId);

   app.get(
      "/api/coursesForStudent/:studentId",
      studentCourse.findStudentCourses
   );

   app.put("/api/studentCourse/:id", studentCourse.update);

   app.delete("/api/studentCourse/:id", studentCourse.delete);

   app.delete("/api/studentCourses", studentCourse.deleteAll);
};
