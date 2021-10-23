module.exports = (app) => {
   const videoComment = require("../controllers/videoComment.controllers.js");

   app.post("/api/addVideoComment", videoComment.create);

   app.get("/api/videoComments", videoComment.findAll);

   app.get("/api/videoComment/:id", videoComment.findOne);

   app.put("/api/videoComment/:id", videoComment.update);

   app.delete("/api/videoComment/:id", videoComment.delete);

   app.delete("/api/videoComments", videoComment.deleteAll);
};
