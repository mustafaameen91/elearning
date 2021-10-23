module.exports = (app) => {
   const usedCode = require("../controllers/usedCode.controllers.js");

   app.post("/api/addUsedCode", usedCode.create);

   app.get("/api/usedCodes", usedCode.findAll);

   app.get("/api/usedCode/:id", usedCode.findOne);

   app.put("/api/usedCode/:id", usedCode.update);

   app.delete("/api/usedCode/:id", usedCode.delete);

   app.delete("/api/usedCodes", usedCode.deleteAll);
};
