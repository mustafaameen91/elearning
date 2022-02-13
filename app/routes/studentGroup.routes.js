module.exports = (app) => {
   const studentGroup = require("../controllers/studentGroup.controllers.js");

   app.post("/api/addStudentGroup", studentGroup.create);

   app.get("/api/studentGroups", studentGroup.findAll);

   app.get("/api/studentGroup/:id", studentGroup.findOne);

   app.put("/api/studentGroup/:id", studentGroup.update);

   app.delete("/api/studentGroup/:id", studentGroup.delete);

   app.delete("/api/studentGroups", studentGroup.deleteAll);
};
