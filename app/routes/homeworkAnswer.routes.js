module.exports = (app) => {
   const homeworkAnswer = require("../controllers/homeworkAnswer.controllers.js");

   app.post("/api/addHomeworkAnswer", homeworkAnswer.create);

   app.post("/api/addManyAnswer", homeworkAnswer.createMultiAnswer);

   app.get("/api/homeworkAnswers", homeworkAnswer.findAll);

   app.get("/api/homeworkAnswer/:id", homeworkAnswer.findOne);

   app.get("/api/studentAnswer", homeworkAnswer.findOneForStudent);

   app.put("/api/homeworkAnswer/:id", homeworkAnswer.update);

   app.delete("/api/homeworkAnswer/:id", homeworkAnswer.delete);

   app.delete("/api/homeworkAnswers", homeworkAnswer.deleteAll);
};
