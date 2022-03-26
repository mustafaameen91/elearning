module.exports = (app) => {
   const homeworkMark = require("../controllers/homeworkMark.controllers.js");

   app.post("/api/addHomeworkMark", homeworkMark.create);

   app.get("/api/homeworkMarks", homeworkMark.findAll);

   app.get("/api/homeworkMark/:id", homeworkMark.findOne);

   app.put("/api/homeworkMark/:id", homeworkMark.update);

   app.delete("/api/homeworkMark/:id", homeworkMark.delete);

   app.delete("/api/homeworkMarks", homeworkMark.deleteAll);
};
