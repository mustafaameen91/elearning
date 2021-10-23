module.exports = (app) => {
   const status = require("../controllers/status.controllers.js");

   app.post("/api/addStatus", status.create);

   app.get("/api/statuses", status.findAll);

   app.get("/api/status/:id", status.findOne);

   app.put("/api/status/:id", status.update);

   app.delete("/api/status/:id", status.delete);

   app.delete("/api/statuses", status.deleteAll);
};
