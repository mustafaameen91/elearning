module.exports = (app) => {
   const courseDistributor = require("../controllers/courseDistributor.controllers.js");

   app.post("/api/addCourseDistributor", courseDistributor.create);

   app.get("/api/courseDistributors", courseDistributor.findAll);

   app.get("/api/courseDistributor/:id", courseDistributor.findOne);

   app.get(
      "/api/distributorCourse/:id",
      courseDistributor.findOneByDistributorId
   );

   app.put("/api/courseDistributor/:id", courseDistributor.update);

   app.delete("/api/courseDistributor/:id", courseDistributor.delete);

   app.delete("/api/courseDistributors", courseDistributor.deleteAll);
};
