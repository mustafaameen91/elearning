module.exports = (app) => {
   const globalLibrary = require("../controllers/globalLibrary.controllers.js");

   app.post("/api/addGlobalLibrary", globalLibrary.create);

   app.get("/api/globalLibraries", globalLibrary.findAll);

   app.get("/api/globalLibrary/:id", globalLibrary.findOne);

   app.get("/api/globalTakes", globalLibrary.findAllPaginated);

   app.put("/api/globalLibrary/:id", globalLibrary.update);

   app.delete("/api/globalLibrary/:id", globalLibrary.delete);

   app.delete("/api/globalLibraries", globalLibrary.deleteAll);
};
