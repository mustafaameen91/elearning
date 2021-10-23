module.exports = (app) => {
   const teacherInfo = require("../controllers/teacherInfo.controllers.js");

   app.post("/api/addTeacherInfo", teacherInfo.create);

   app.get("/api/teacherInfos", teacherInfo.findAll);

   app.get("/api/teacherInfo/:id", teacherInfo.findOne);

   app.put("/api/teacherInfo/:id", teacherInfo.update);

   app.delete("/api/teacherInfo/:id", teacherInfo.delete);

   app.delete("/api/teacherInfos", teacherInfo.deleteAll);
};
