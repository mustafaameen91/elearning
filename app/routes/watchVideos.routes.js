module.exports = (app) => {
   const watchVideos = require("../controllers/watchVideos.controllers.js");

   app.post("/api/addWatchVideos", watchVideos.create);

   app.get("/api/watchVideos", watchVideos.findAll);

   app.get("/api/watchVideo/:id", watchVideos.findOne);

   app.put("/api/watchVideo/:id", watchVideos.update);

   app.delete("/api/watchVideo/:id", watchVideos.delete);

   app.delete("/api/watchVideos", watchVideos.deleteAll);
};
