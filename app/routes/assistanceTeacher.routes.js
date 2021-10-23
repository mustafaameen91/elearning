module.exports = (app) => {
   const assistanceTeacher = require("../controllers/assistanceTeacher.controllers.js");

   app.post("/api/addAssistanceTeacher", assistanceTeacher.create);

   app.get("/api/assistanceTeachers", assistanceTeacher.findAll);

   app.get("/api/assistanceTeacher/:id", assistanceTeacher.findOne);

   app.put("/api/assistanceTeacher/:id", assistanceTeacher.update);

   app.delete("/api/assistanceTeacher/:id", assistanceTeacher.delete);

   app.delete("/api/assistanceTeachers", assistanceTeacher.deleteAll);
};
