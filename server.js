const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const morgan = require("morgan");

const users = require("./routes/api/users");
const activities = require("./routes/api/activities");
const categories = require("./routes/api/categories");

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

// Start app
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
