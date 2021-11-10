module.exports = (app) => {
   const course = require("../controllers/course.controllers.js");
   const checkAuth = require("../middleware/checkAuth.middleware.js");

   app.post("/api/addCourse", course.create);

   app.get("/api/courses", course.findAll);

   app.get("/api/course/:id", course.findOne);

   app.get("/api/filterCourse", course.findByFilterCourse);

   app.get("/api/feed/:id", course.findByClassId);

   app.put("/api/course/:id", course.update);

   app.delete("/api/course/:id", course.delete);

   app.delete("/api/courses", course.deleteAll);
};
