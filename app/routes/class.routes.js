module.exports = (app) => {
   const studentClass = require("../controllers/class.controllers.js");

   app.post("/api/addClass", studentClass.create);

   app.get("/api/classes", studentClass.findAll);

   app.get("/api/class/:id", studentClass.findOne);

   app.put("/api/class/:id", studentClass.update);

   app.delete("/api/class/:id", studentClass.delete);

   app.delete("/api/classes", studentClass.deleteAll);
};
