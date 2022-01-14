module.exports = (app) => {
   const courseRating = require("../controllers/courseRating.controllers.js");

   app.post("/api/addCourseRating", courseRating.create);

   app.get("/api/courseRatings", courseRating.findAll);

   app.get("/api/courseRating/:id", courseRating.findOne);

   app.put("/api/courseRating/:id", courseRating.update);

   app.delete("/api/courseRating/:id", courseRating.delete);

   app.delete("/api/courseRatings", courseRating.deleteAll);
};
