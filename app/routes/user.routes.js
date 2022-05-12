module.exports = (app) => {
   const user = require("../controllers/user.controllers.js");

   app.post("/api/addUser", user.create);

   app.post("/api/login", user.login);

   app.post("/api/logout", user.logout);

   app.get("/api/users", user.findAll);

   app.get("/api/userHome/:id", user.findAllForHome);

   app.get("/api/userPhone", user.findByPhoneNumber);

   app.get("/api/students", user.findAllStudents);

   app.get("/api/userShow/:roleId", user.findByRoleIdCanShow);

   app.get("/api/userRoles/:roleId", user.findByRoleId);

   app.get("/api/user/:id", user.findOne);

   app.put("/api/user/:id", user.update);

   app.put("/api/resetPassword", user.updatePassword);

   app.delete("/api/user/:id", user.delete);

   app.delete("/api/users", user.deleteAll);
};
