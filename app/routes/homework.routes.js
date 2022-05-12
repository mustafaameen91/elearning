module.exports = (app) => {
   const homework = require("../controllers/homework.controllers.js");

   app.post("/api/addHomework", homework.create);

   app.get("/api/homeworks", homework.findAll);

   app.get("/api/homeworkStudentAnswer/:id", homework.findAllForHomework);

   app.get("/api/homework/:id", homework.findOne);

   app.put("/api/homework/:id", homework.update);

   app.delete("/api/homework/:id", homework.delete);

   app.delete("/api/homeworks", homework.deleteAll);
};
