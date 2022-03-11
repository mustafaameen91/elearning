module.exports = (app) => {
   const setting = require("../controllers/setting.controllers.js");

   app.post("/api/addSetting", setting.create);

   app.get("/api/settings", setting.findAll);

   app.get("/api/setting/:id", setting.findOne);

   app.get("/api/getVersion", setting.checkVersion);

   app.put("/api/setting/:id", setting.update);

   app.delete("/api/setting/:id", setting.delete);

   app.delete("/api/settings", setting.deleteAll);
};
