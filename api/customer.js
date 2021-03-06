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

//@@ Get specific customer, Post, Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Bill.find({ _id: req.params.id })
      .then(customer => res.status(200).json(customer))
      .catch(err => console.log(err));
  }
);

//@@ Delete specific customer, Post, Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Bill.findOneAndDelete({ _id: req.params.id })
      .then(customers => {
        if (customers) res.status(200).json(customers);
        else res.status(400);
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
