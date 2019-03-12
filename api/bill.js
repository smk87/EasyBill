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
      if (req.body.meterno) newCustomer.meterno = req.body.meterno;
      if (req.body.gasbill) newCustomer.gasbill = req.body.gasbill;
      if (req.body.waterbill) newCustomer.waterbill = req.body.waterbill;
      if (req.body.basebill) newCustomer.basebill = req.body.basebill;
      if (req.body.garagebill) newCustomer.garagebill = req.body.garagebill;
      if (req.body.wastebill) newCustomer.wastebill = req.body.wastebill;
      if (req.body.electricitybill)
        newCustomer.electricitybill = req.body.electricitybill;

      Bill.findOne({
        customername: req.body.customername,
        position: req.body.position
      }).then(customer => {
        if (customer) {
          //Edit
          Bill.findOneAndUpdate(
            {
              customername: req.body.customername,
              position: req.body.position
            },
            { $set: newCustomer },
            { new: true }
          ).then(customer => res.status(200).json(customer));
        } else {
          //Add

          //console.log(newCustomer);
          //res.json(newCustomer);

          new Bill(newCustomer)
            .save()
            .then(bill => res.status(200).json(bill))
            .catch(err => console.log(err));
        }
      });
    } else {
      res.status(400).json(errors);
    }
  }
);
module.exports = router;
