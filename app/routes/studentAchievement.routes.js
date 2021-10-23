module.exports = (app) => {
   const studentAchievement = require("../controllers/studentAchievement.controllers.js");

   app.post("/api/addStudentAchievement", studentAchievement.create);

   app.get("/api/studentAchievements", studentAchievement.findAll);

   app.get("/api/studentAchievement/:id", studentAchievement.findOne);

   app.put("/api/studentAchievement/:id", studentAchievement.update);

   app.delete("/api/studentAchievement/:id", studentAchievement.delete);

   app.delete("/api/studentAchievements", studentAchievement.deleteAll);
};
