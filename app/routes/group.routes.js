module.exports = (app) => {
   const group = require("../controllers/group.controllers.js");

   app.post("/api/addGroup", group.create);

   app.get("/api/groups", group.findAll);

   app.get("/api/courseGroups/:id", group.findAllByCourseId);

   app.get("/api/group/:id", group.findOne);

   app.put("/api/group/:id", group.update);

   app.delete("/api/group/:id", group.delete);

   app.delete("/api/groups", group.deleteAll);
};
