const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // DB Config and Connection
// const db = require("./config/keys").mongoURI;
// mongoose
//   .connect(db)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(() => console.log(err));

// Routes
// To be added

// Entry point
app.get("/api", (req, res) => {
  res.json({
    name: "Work Log API",
    description: "REST API to log and track time spent at work.",
    github: "https://github.com/chamatt/work-log-api"
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
