module.exports = (app) => {
   const library = require("../controllers/library.controllers.js");

   app.post("/api/addLibrary", library.create);

   app.get("/api/libraries", library.findAll);

   app.get("/api/library/:id", library.findOne);

   app.put("/api/library/:id", library.update);

   app.delete("/api/library/:id", library.delete);

   app.delete("/api/libraries", library.deleteAll);
};
