//Required libaries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Importing api modules
const user = require("./api/user");
const bill = require("./api/bill");

//Initialize express app
const app = express();

//Adding Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Import
const db = require("./key/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));

//Setting port for server
const port = process.env.PORT || 3000;

//Routes
app.get("", (req, res) => res.send("hello world"));
app.use("/api/user", user);
app.use("/api/bill", bill);

//Starting server
app.listen(port, () => console.log(`Server running on port ${port}...`));
