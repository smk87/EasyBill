const express = require("express");
const router = express.Router();
const secret = require("../key/keys").secret;

//Encryption library
const bcrypt = require("bcryptjs");
//Validation library
const validate = require("validator");
//authorization library
const passport = require("passport");

//Import Models
const Bill = require("../models/Bill");

//@@ Get all customers, Post, Private
router.get("", passport.authenticate("jwt", { session: false }), (req, res) => {
  Bill.find({ createdby: req.user._id })
    .then(customer => res.status(200).json(customer))
    .catch(err => console.log(err));
});
module.exports = router;
