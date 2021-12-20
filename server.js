const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const history = require("connect-history-api-fallback");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

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

app.post("/api/upload", function (req, res) {
   if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
   }

   let uploadedFile = req.files.attachment;
   let photoName = generateRandomName(5, 3);
   var filename = uploadedFile.name;
   var ext = filename.substr(filename.lastIndexOf(".") + 1);
   let imagePath = `${__dirname}/app/attachments/${photoName}.${ext}`;

   uploadedFile.mv(imagePath, function (err) {
      if (err) return res.status(500).send(err);

      res.send({ imagePath: `attachment/${photoName}.${ext}` });
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

app.post(`/api/sendSms`, (req, res) => {
   try {
      console.log(req.body);
      client.messages
         .create({
            body: `${req.body.message}`,
            from: "+12542745154",
            to: `+964${req.body.phone}`,
         })
         .then((message) => {
            res.send({ message: "message sent" });
            console.log(message.sid);
         })
         .catch((e) => {
            res.status(400).send(e);
         });
   } catch (err) {
      res.status(400).send(err);
      console.error(err);
   }
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
require("./app/routes/class.routes.js")(app);
require("./app/routes/homework.routes.js")(app);
require("./app/routes/courseVideo.routes.js")(app);
require("./app/routes/videoAttachment.routes.js")(app);
require("./app/routes/videoComment.routes.js")(app);
require("./app/routes/reportComment.routes.js")(app);
require("./app/routes/quiz.routes.js")(app);
require("./app/routes/choice.routes.js")(app);
require("./app/routes/studentCourse.routes.js")(app);
require("./app/routes/status.routes.js")(app);
require("./app/routes/favorites.routes.js")(app);
require("./app/routes/courseDistributor.routes.js")(app);

const staticFileMiddleware = express.static(__dirname + "/dist");
app.use(staticFileMiddleware);
app.use(
   history({
      disableDotRule: true,
      verbose: true,
   })
);

app.use(staticFileMiddleware);

app.listen(5100, () => {
   console.log("app listening on port 5100");
});

// server {
//    listen 80;
//    listen [::]:80;
//    #set your directory
//    root /var/www/elearning;
//    index index.html index.htm index.nginx-debian.html;
//    #set sub-domain
//    server_name portal.codel-tech.com;

//    #set other configration like node js
//    location / {
//    proxy_pass http://127.0.0.1:5100;
//    proxy_http_version 1.1;
//    proxy_set_header Upgrade $http_upgrade;
//    proxy_set_header Connection 'upgrade';
//    proxy_set_header Host $host;
//    proxy_cache_bypass $http_upgrade;
// }

// location /phpmyadmin {
//   root /usr/share/;
//   index index.php index.html index.htm;
//   location ~ ^/phpmyadmin/(.+\.php)$ {
//           try_files $uri =404;
//           root /usr/share/;
//           fastcgi_pass unix:/run/php/php7.4-fpm.sock;
//           fastcgi_index index.php;
//           fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
//           include /etc/nginx/fastcgi_params;
//    }
//   location ~* ^/phpmyadmin/(.+\.(jpg|jpeg|gif|css|png|js|ico|html|xml|txt))$ {
//           root /usr/share/;
//    }
// }
// }

// sudo ln -s /etc/nginx/sites-available/elearning /etc/nginx/sites-enabled/
