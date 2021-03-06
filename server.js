//Required libaries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Importing api modules
const user = require("./api/user");
const bill = require("./api/bill");
const customer = require("./api/customer");

//Initialize express app
const app = express();

//Adding Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Adding Passport midleware
app.use(passport.initialize());

//Passport Config
require("./config/passport.js")(passport);

//DB Import
const db = require("./key/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));

//Setting port for server
const port = process.env.PORT || 5000;

//Routes
app.get("", (req, res) => res.send("hello world"));
app.use("/api/user", user);
app.use("/api/bill", bill);
app.use("/api/customer", customer);

//Starting server
app.listen(port, () => console.log(`Server running on port ${port}...`));
