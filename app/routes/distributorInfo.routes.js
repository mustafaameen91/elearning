module.exports = (app) => {
   const distributorInfo = require("../controllers/distributorInfo.controllers.js");

   app.post("/api/addDistributorInfo", distributorInfo.create);

   app.get("/api/distributorInfos", distributorInfo.findAll);

   app.get("/api/distributorInfo/:id", distributorInfo.findOne);

   app.put("/api/distributorInfo/:id", distributorInfo.update);

   app.delete("/api/distributorInfo/:id", distributorInfo.delete);

   app.delete("/api/distributorInfos", distributorInfo.deleteAll);
};
