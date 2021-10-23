module.exports = (app) => {
   const courseVideo = require("../controllers/courseVideo.controllers.js");

   app.post("/api/addCourseVideo", courseVideo.create);

   app.get("/api/courseVideos", courseVideo.findAll);

   app.get("/api/courseVideo/:id", courseVideo.findOne);

   app.put("/api/courseVideo/:id", courseVideo.update);

   app.delete("/api/courseVideo/:id", courseVideo.delete);

   app.delete("/api/courseVideos", courseVideo.deleteAll);
};
