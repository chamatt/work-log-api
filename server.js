const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const morgan = require("morgan");

const users = require("./routes/api/users");
const activities = require("./routes/api/activities");
const categories = require("./routes/api/categories");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));

// DB Config and Connection
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport Config
app.use(passport.initialize());
require("./config/passport")(passport);

// Entry point

/**
 * @api {get} /api Entry point
 * @apiGroup 1. Introduction
 * @apiDescription Information about API
 * @apiSuccess {String} name API Name
 * @apiSuccess {String} description API Description
 * @apiSuccess {String} github Github Repository link
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *       "name": "Work Log API",
 *       "description": "REST API to log and track time spent at work.",
 *       "github": "https://github.com/chamatt/work-log-api"
 *    }
 */
app.get("/api", (req, res) => {
  res.json({
    name: "Work Log API",
    description: "REST API to log and track time spent at work.",
    github: "https://github.com/chamatt/work-log-api"
  });
});

// Routes
app.use("/api/categories", categories);
app.use("/api/users", users);
app.use("/api/activities", activities);
app.use("/docs", express.static(__dirname + "/public/apidoc"));

// Start app
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
