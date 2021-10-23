module.exports = (app) => {
   const choice = require("../controllers/choice.controllers.js");

   app.post("/api/addChoice", choice.create);

   app.get("/api/choices", choice.findAll);

   app.get("/api/choice/:id", choice.findOne);

   app.put("/api/choice/:id", choice.update);

   app.delete("/api/choice/:id", choice.delete);

   app.delete("/api/choices", choice.deleteAll);
};
