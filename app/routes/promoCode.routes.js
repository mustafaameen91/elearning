module.exports = (app) => {
   const promoCode = require("../controllers/promoCode.controllers.js");

   app.post("/api/addPromoCode", promoCode.create);

   app.get("/api/promoCodes", promoCode.findAll);

   app.get("/api/promoCode/:id", promoCode.findOne);

   app.put("/api/promoCode/:id", promoCode.update);

   app.delete("/api/promoCode/:id", promoCode.delete);

   app.delete("/api/promoCodes", promoCode.deleteAll);
};
