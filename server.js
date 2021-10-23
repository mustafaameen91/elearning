const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

function generateRandomName(length, patientId) {
   var result = "";
   var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   var charactersLength = characters.length;
   for (var i = 0; i < length; i++) {
      result +=
         characters.charAt(Math.floor(Math.random() * charactersLength)) +
         patientId;
   }
   return result;
}

app.post("/upload", function (req, res) {
   if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
   }

   let uploadedFile = req.files.attachment;
   let photoName = generateRandomName(5, 3);
   var filename = uploadedFile.name;
   var ext = filename.substr(filename.lastIndexOf(".") + 1);
   let imagePath = `${__dirname}/app/studentImages/${photoName}.${ext}`;

   uploadedFile.mv(imagePath, function (err) {
      if (err) return res.status(500).send(err);

      res.send({ imagePath: `studentImages/${photoName}.${ext}` });
   });
});

app.get("/api/attachment/:file", function (request, response) {
   let file = request.params.file;
   var extension = file.split(".").pop();
   var tempFile = `./app/attachments/${file}`;

   fs.readFile(tempFile, function (err, data) {
      switch (extension) {
         case "jpg":
            contentType = "image/jpg";
            isImage = 1;
            break;
         case "png":
            contentType = "image/png";
            isImage = 1;
            break;
         case "jpeg":
            contentType = "image/jpeg";
            isImage = 1;
            break;
      }
      response.contentType(contentType);
      response.send(data);
   });
});

require("./app/routes/user.routes.js")(app);
require("./app/routes/role.routes.js")(app);
require("./app/routes/province.routes.js")(app);
require("./app/routes/distributorInfo.routes.js")(app);
require("./app/routes/teacherInfo.routes.js")(app);
require("./app/routes/studentInfo.routes.js")(app);
require("./app/routes/assistanceTeacher.routes.js")(app);
require("./app/routes/homeworkAnswer.routes.js")(app);
require("./app/routes/teacherAssistanceInfo.routes.js")(app);
require("./app/routes/globalLibrary.routes.js")(app);
require("./app/routes/library.routes.js")(app);
require("./app/routes/studentAchievement.routes.js")(app);
require("./app/routes/usedCode.routes.js")(app);
require("./app/routes/promoCode.routes.js")(app);
require("./app/routes/course.routes.js")(app);
require("./app/routes/subject.routes.js")(app);
require("./app/routes/category.routes.js")(app);
require("./app/routes/subCategory.routes.js")(app);
require("./app/routes/homework.routes.js")(app);
require("./app/routes/courseVideo.routes.js")(app);
require("./app/routes/videoAttachment.routes.js")(app);
require("./app/routes/videoComment.routes.js")(app);
require("./app/routes/reportComment.routes.js")(app);
require("./app/routes/quiz.routes.js")(app);
require("./app/routes/choice.routes.js")(app);
require("./app/routes/studentCourse.routes.js")(app);
require("./app/routes/status.routes.js")(app);

app.listen(5100, () => {
   console.log("app listening on port 5100");
});
