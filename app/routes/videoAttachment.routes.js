module.exports = (app) => {
   const videoAttachment = require("../controllers/videoAttachment.controllers.js");

   app.post("/api/addVideoAttachment", videoAttachment.create);

   app.get("/api/videoAttachments", videoAttachment.findAll);

   app.get("/api/videoAttachment/:id", videoAttachment.findOne);

   app.put("/api/videoAttachment/:id", videoAttachment.update);

   app.delete("/api/videoAttachment/:id", videoAttachment.delete);

   app.delete("/api/videoAttachments", videoAttachment.deleteAll);
};
