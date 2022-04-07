const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const http = require("http");
const ytdl = require("ytdl-core");
const history = require("connect-history-api-fallback");
require("dotenv").config();
const notification = require("./app/notifications/notification.js");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const {
   prismaErrorHandling,
   prismaInstance,
} = require("./app/middleware/handleError.middleware.js");

app.use(cors({ credentials: true, origin: true }));
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
app.post("/api/uploadVideo", function (req, res) {
   if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
   }

   let uploadedFile = req.files.video;
   let photoName = generateRandomName(5, 20);
   var filename = uploadedFile.name;
   var ext = filename.substr(filename.lastIndexOf(".") + 1);
   let imagePath = `${__dirname}/app/videos/${photoName}.${ext}`;
   uploadedFile.mv(imagePath, function (err) {
      if (err) return res.status(500).send(err);
      res.send({ videoPath: `videoStream/${photoName}.${ext}` });
   });
});

app.post("/api/upload", function (req, res) {
   if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
   }
   console.log(req.files);

   let uploadedFiles = [];

   if (req.files.files?.length > 1) {
      req.files.files.forEach((file, index) => {
         let uploadedFile = file;
         let photoName = generateRandomName(5, index + 1);
         var filename = uploadedFile.name;
         var ext = filename.substr(filename.lastIndexOf(".") + 1);
         let imagePath = `${__dirname}/app/attachments/${photoName}.${ext}`;
         uploadedFiles.push(
            new Promise((resolve) => {
               uploadedFile.mv(imagePath, function (err) {
                  if (err) return res.status(500).send(err);
                  resolve({ imagePath: `attachment/${photoName}.${ext}` });
               });
            })
         );
      });

      Promise.all(uploadedFiles).then((images) => {
         res.send({ images: images });
      });
   } else {
      let uploadedFile = req.files.attachment;
      let photoName = generateRandomName(5, 20);
      var filename = uploadedFile.name;
      var ext = filename.substr(filename.lastIndexOf(".") + 1);
      let imagePath = `${__dirname}/app/attachments/${photoName}.${ext}`;
      uploadedFile.mv(imagePath, function (err) {
         if (err) return res.status(500).send(err);
         res.send({ imagePath: `attachment/${photoName}.${ext}` });
      });
   }
});

app.post("/api/uploadFromUrl", function (req, res) {
   let videoName = generateRandomName(5, 10);
   let courseVideoId = req.body.courseVideoId;
   let videoDownload = ytdl(req.body.videoUrl).pipe(
      fs.createWriteStream(`${__dirname}/app/videos/${videoName}.mp4`)
   );
   videoDownload.on("close", async function () {
      try {
         const updateCourseVideo = await prismaInstance.courseVideo.update({
            where: { idCourseVideo: JSON.parse(courseVideoId) },
            data: { secondVideoLink: `${videoName}.mp4` },
         });
         res.send({ message: updateCourseVideo });
      } catch (error) {
         console.log(prismaErrorHandling(error));
         res.status(400).send({ error: prismaErrorHandling(error) });
      }

      console.log("end");
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
            from: "Kattwa",
            messagingServiceSid: "MG3019028a456cc810853981233a43037c",
            to: `${req.body.phone}`,
         })
         .then((message) => {
            res.send({ message: "message sent" });
            console.log(message.sid);
         })
         .catch((e) => {
            res.status(403).send(e);
         });
   } catch (err) {
      res.status(400).send(err);
      console.error(err);
   }
});

app.post("/api/sendNotification", (req, res) => {
   console.log(req.body.title);
   var message = {
      app_id: "4295b0f7-9a63-4bb0-96ea-749e71e8c346",
      headings: { en: `${req.body.title}` },
      contents: {
         en: `${req.body.content}`,
      },
      included_segments: ["Subscribed Users"],
   };

   notification(message);
   res.send({ text: "message send" });
});

app.get("/test", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.get("/api/videoStream/:name", function (req, res) {
   // const range = req.headers.range;
   // let videoName = req.params.name;
   // console.log(req.headers);
   // if (!range) {
   //    res.status(400).send("Requires Range header");
   // }

   // const videoPath = `${__dirname}/app/videos/${videoName}`;
   // console.log(videoPath);
   // const videoSize = fs.statSync(`${videoPath}`).size;
   // const CHUNK_SIZE = 10 ** 6;
   // const start = Number(range.replace(/\D/g, ""));
   // console.log(start);
   // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
   // const contentLength = end - start + 1;
   // const headers = {
   //    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
   //    "Accept-Ranges": "bytes",
   //    "Content-Length": contentLength,
   //    "Content-Type": "video/mp4",
   // };
   // res.writeHead(206, headers);
   // const videoStream = fs.createReadStream(videoPath, { start, end });
   // videoStream.pipe(res);
   let videoName = req.params.name;
   const videoPath = `${__dirname}/app/videos/${videoName}`;
   res.sendFile(videoPath);
   // fs.readFile(videoPath, function (err, data) {
   //    if (err) {
   //       console.log(err);
   //    }
   //    console.log(data);
   //    res.writeHead(200, {
   //       "Content-Type": "video/mp4",
   //       "accept-ranges": "bytes",
   //       "access-control-expose-headers": "origin, range",
   //    });

   //    // res.writeHead(200, { "content-length": "origin, range" });
   //    res.write(data);
   //    res.end();
   // });
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
require("./app/routes/avatar.routes.js")(app);
require("./app/routes/courseRating.routes.js")(app);
require("./app/routes/watchVideos.routes.js")(app);
require("./app/routes/group.routes.js")(app);
require("./app/routes/studentGroup.routes.js")(app);
require("./app/routes/setting.routes.js")(app);
require("./app/routes/homeworkMark.routes.js")(app);

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
