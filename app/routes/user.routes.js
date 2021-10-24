module.exports = (app) => {
   const user = require("../controllers/user.controllers.js");

   app.post("/api/addUser", user.create);

   app.post("/api/login", user.login);

   app.get("/api/users", user.findAll);

   app.get("/api/userRoles/:roleId", user.findByRoleId);

   app.get("/api/user/:id", user.findOne);

   app.put("/api/user/:id", user.update);

   app.delete("/api/user/:id", user.delete);

   app.delete("/api/users", user.deleteAll);
};
