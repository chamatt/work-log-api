const express = require("express");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const Activity = require("../../models/Ativity");
const User = require("../../models/User");

module.exports = router;

function getActivities(req, res, days) {
  console.log(req.query);
  const id = req.user.id;
  const query = req.query;
  Activity.find({
    ...query,
    user: id,
    date: { $gt: moment().subtract(days, "days") }
  })
    .populate("user", ["id", "fullName", "username"])
    .populate("category", ["id", "name"])
    .sort({ date: -1 })
    .then(activities => {
      res.json(activities);
    });
}

// @route  GET api/activities/me/week
// @desc   Return my activities from the last 7 days
// @access Private
router.get(
  "/me/week",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    getActivities(req, res, 7);
  }
);

// @route  GET api/activities/me/month
// @desc   Return my activities from the last 7 days
// @access Private
router.get(
  "/me/month",
  passport.authenticate("jwt", { session: false }),
  (req, res) => getActivities(req, res, 30)
);

// @route  GET api/activities
// @desc   Return all activities
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const id = req.user.id;

    const activity = new Activity({
      date: moment(req.body.date, "YYYY-MM-DD"),
      length: moment(req.body.length, "HH-mm"),
      category: req.body.category,
      description: req.body.description,
      user: req.user.id
    });

    activity.save().then(() => {
      res.json({ success: true });
    });
  }
);
