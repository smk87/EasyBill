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

//@@ Add or Edit Bill, Post, Private
router.post(
  "",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    errors = {};
    if (validate.isEmpty(req.body.customername, { ignore_whitespace: true })) {
      errors.customername = "Customer name can not be empty";
    }
    if (validate.isEmpty(req.body.position, { ignore_whitespace: true })) {
      errors.position = "Position can not be empty";
    }

    if (Object.keys(errors).length === 0) {
      const newCustomer = {};

      newCustomer.createdby = req.user.id;
      newCustomer.customername = req.body.customername;
      newCustomer.position = req.body.position;

      //Check for optional input
      if (req.body.gasbill) newCustomer.gasbill = req.body.gasbill;
      if (req.body.waterbill) newCustomer.waterbill = req.body.waterbill;
      if (req.body.basebill) newCustomer.basebill = req.body.basebill;
      if (req.body.otherbill) newCustomer.otherbill = req.body.otherbill;
      if (req.body.oldunit) newCustomer.oldunit = req.body.oldunit;
      if (req.body.newunit) newCustomer.newunit = req.body.newunit;

      console.log(newCustomer);
      //res.json(newCustomer);

      new Bill(newCustomer)
        .save()
        .then(bill => res.json(bill))
        .catch(err => console.log(err));
    } else {
      res.json(errors);
    }
  }
);
module.exports = router;
