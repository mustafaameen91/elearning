module.exports = (app) => {
   const courseDistributor = require("../controllers/courseDistributor.controllers.js");
   const checkAuth = require("../middleware/checkAuth.middleware.js");

   app.post("/api/addCourseDistributor", courseDistributor.create);

   app.get("/api/courseDistributors", courseDistributor.findAll);

   app.get("/api/courseDistributor/:id", courseDistributor.findOne);

   app.get("/api/courseDistributor/:id", courseDistributor.findOne);

   app.get("/api/courseDistributors/:id", courseDistributor.findOneByCourseId);

   app.get(
      "/api/distributorCourse/:id",
      courseDistributor.findOneByDistributorId
   );

   app.get(
      "/api/teacherDist/:id",
      courseDistributor.findOneByTeacherDistributor
   );

   app.put("/api/courseDistributor/:id", courseDistributor.update);

   app.delete("/api/courseDistributor/:id", courseDistributor.delete);

   app.delete("/api/courseDistributors", courseDistributor.deleteAll);
};
