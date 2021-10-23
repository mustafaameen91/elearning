module.exports = (app) => {
   const subject = require("../controllers/subject.controllers.js");

   app.post("/api/addSubject", subject.create);

   app.get("/api/subjects", subject.findAll);

   app.get("/api/subject/:id", subject.findOne);

   app.put("/api/subject/:id", subject.update);

   app.delete("/api/subject/:id", subject.delete);

   app.delete("/api/subjects", subject.deleteAll);
};
