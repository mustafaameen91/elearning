module.exports = (app) => {
   const teacherAssistanceInfo = require("../controllers/teacherAssistanceInfo.controllers.js");

   app.post("/api/addTeacherAssistanceInfo", teacherAssistanceInfo.create);

   app.get("/api/teacherAssistanceInfos", teacherAssistanceInfo.findAll);

   app.get("/api/teacherAssistanceInfo/:id", teacherAssistanceInfo.findOne);

   app.put("/api/teacherAssistanceInfo/:id", teacherAssistanceInfo.update);

   app.delete("/api/teacherAssistanceInfo/:id", teacherAssistanceInfo.delete);

   app.delete("/api/teacherAssistanceInfos", teacherAssistanceInfo.deleteAll);
};
