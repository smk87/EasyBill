const express = require("express");
const router = express.Router();
const secret = require("../key/keys").secret;

//Encryption library
const bcrypt = require("bcryptjs");
//Validation library
const validate = require("validator");
//JWT library
const jwt = require("jsonwebtoken");

//Import Models
const User = require("../models/User");

//@@ Register, Post, Public
router.post("/register", (req, res) => {
  errors = {};
  //Check username
  if (validate.isEmpty(req.body.username, { ignore_whitespace: true })) {
    errors.username = "Username can not be empty";
  } else if (!validate.isLength(req.body.username, { min: 4, max: 12 })) {
    errors.username = "Username length must be in 4-12 characters";
  }
  //Check password
  if (validate.isEmpty(req.body.password, { ignore_whitespace: true })) {
    errors.password = "Password can not be empty";
  } else if (!validate.isLength(req.body.password, { min: 5, max: 20 })) {
    errors.password = "Password length must be in 5-20 characters";
  }
  if (Object.keys(errors).length === 0) {
    User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        errors.username = "User already exist";
        res.status(400).json(errors);
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            newUser = new User({
              username: req.body.username,
              password: hash
            });
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  } else {
    res.status(400).json(errors);
  }
});

//@@ Login, Post, Public
router.post("/login", (req, res) => {
  errors = {};
  username = req.body.username;
  password = req.body.password;

  User.findOne({ username: username }).then(user => {
    if (!user) {
      errors.username = "User does not exist";
      res.status(404);
      res.json(errors);
    } else {
      //Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //Password matched
          const payload = { id: user._id, username: user.username };

          //Sign Token
          jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
            if (err) console.log(err);
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Password is incorrect";
          res.status(400);
          res.json(errors);
        }
      });
    }
  });
});

module.exports = router;
