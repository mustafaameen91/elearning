module.exports = (app) => {
   const quiz = require("../controllers/quiz.controllers.js");

   app.post("/api/addQuiz", quiz.create);

   app.get("/api/quizzes", quiz.findAll);

   app.get("/api/quiz/:id", quiz.findOne);

   app.put("/api/quiz/:id", quiz.update);

   app.delete("/api/quiz/:id", quiz.delete);

   app.delete("/api/quizzes", quiz.deleteAll);
};
