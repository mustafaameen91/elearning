const User = require("../models/user.models.js");
require("dotenv").config();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   const user = new User({
      userName: req.body.userName,
      password: CryptoJS.AES.encrypt(
         req.body.password,
         process.env.SECRET_KEY
      ).toString(),
      phone: req.body.phone,
      provinceId: req.body.provinceId * 1,
      roleId: req.body.roleId,
   });

   User.create(user, (err, data) => {
      if (err) res.status(err.code).send(err);
      else {
         res.send(data);
      }
   });
};

exports.findByRoleId = (req, res) => {
   User.getByRoleId(req.params.roleId, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findAll = (req, res) => {
   User.getAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.findOne = (req, res) => {
   User.findById(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};
exports.login = (req, res) => {
   User.login(
      {
         phone: req.body.phone,
         password: req.body.password,
      },
      (err, data) => {
         if (err) res.status(err.code).send(err);
         else {
            const token = jwt.sign(data, process.env.JWT_KEY, {
               expiresIn: "30d",
            });
            res.send({ token });
         }
      }
   );
};

exports.update = (req, res) => {
   if (!req.body) {
      res.status(400).send({
         message: "Content can not be empty!",
      });
   }

   User.updateById(req.params.id, new User(req.body), (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send(data);
   });
};

exports.delete = (req, res) => {
   User.remove(req.params.id, (err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `User was deleted successfully!` });
   });
};

exports.deleteAll = (req, res) => {
   User.removeAll((err, data) => {
      if (err) res.status(err.code).send(err);
      else res.send({ message: `All Users were deleted successfully!` });
   });
};
