const express = require("express");
const router = express.Router();

//Encryption library
const bcrypt = require("bcryptjs");
//Validation library
var validate = require("validator");

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
        res.json(errors);
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
    res.json(errors);
  }
});

//@@ Login, Post, Public
router.post("/login", (req, res) => {});

module.exports = router;
