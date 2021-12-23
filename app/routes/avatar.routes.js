module.exports = (app) => {
   const avatar = require("../controllers/avatar.controllers.js");

   app.post("/api/addAvatar", avatar.create);

   app.get("/api/avatars", avatar.findAll);

   app.get("/api/avatar/:id", avatar.findOne);

   app.put("/api/avatar/:id", avatar.update);

   app.delete("/api/avatar/:id", avatar.delete);

   app.delete("/api/avatars", avatar.deleteAll);
};
