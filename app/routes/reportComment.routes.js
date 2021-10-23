module.exports = (app) => {
   const reportComment = require("../controllers/reportComment.controllers.js");

   app.post("/api/addReportComment", reportComment.create);

   app.get("/api/reportComments", reportComment.findAll);

   app.get("/api/reportComment/:id", reportComment.findOne);

   app.put("/api/reportComment/:id", reportComment.update);

   app.delete("/api/reportComment/:id", reportComment.delete);

   app.delete("/api/reportComments", reportComment.deleteAll);
};
