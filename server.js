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
app.use("/api/user", user);
app.use("/api/bill", bill);
app.use("/api/customer", customer);

//Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//Starting server
app.listen(port, () => console.log(`Server running on port ${port}...`));
