module.exports = (app) => {
   const studentInfo = require("../controllers/studentInfo.controllers.js");

   app.post("/api/addStudentInfo", studentInfo.create);

   app.get("/api/studentInfos", studentInfo.findAll);

   app.get("/api/studentInfo/:id", studentInfo.findOne);

   app.put("/api/studentInfo/:id", studentInfo.update);

   app.delete("/api/studentInfo/:id", studentInfo.delete);

   app.delete("/api/studentInfos", studentInfo.deleteAll);
};
