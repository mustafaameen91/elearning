module.exports = (app) => {
   const favorites = require("../controllers/favorites.controllers.js");

   app.post("/api/addFavorite", favorites.create);

   app.get("/api/favorites", favorites.findAll);

   app.get("/api/favorite/:id", favorites.findOne);

   app.get("/api/studentFavorite/:id", favorites.findByStudentId);

   app.put("/api/favorite/:id", favorites.update);

   app.delete("/api/favorite/:id", favorites.delete);

   app.delete("/api/favorites", favorites.deleteAll);
};
