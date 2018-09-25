const express = require("express");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const Activity = require("../../models/Ativity");
const User = require("../../models/User");

const { AdminAuthenticate } = require("../middlewares");

module.exports = router;

function getActivities(req, res, days) {
  console.log(req.query);
  const id = req.user.id;

  let { page, ...filter } = req.query;
  const perPage = 25;
  page = parseInt(page) || 1;

  Activity.find({
    ...filter,
    user: id,
    date: { $gt: moment().subtract(days, "days") }
  })
    .sort({ date: -1 })
    .limit(perPage)
    .skip(perPage * page - perPage)
    .populate("user", ["id", "fullName", "username"])
    .populate("category", ["id", "name"])
    .then(activities => {
      Activity.count({
        ...filter,
        user: id,
        date: { $gt: moment().subtract(days, "days") }
      }).then(count =>
        res.json({
          totalPages: Math.ceil(count / perPage),
          page: page,
          data: activities
        })
      );
    })
    .catch(err => res.status(400).json({ error: "Unknown error" }));
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
// @desc   Return my activities from the last 30 days
// @access Private
router.get(
  "/me/month",
  passport.authenticate("jwt", { session: false }),
  (req, res) => getActivities(req, res, 30)
);

// @route  GET api/activities/me/
// @desc   Return my activities from all time
// @access Private
router.get(
  "/me/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => getActivities(req, res, 10000)
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

    activity
      .save()
      .then(() => {
        res.json({ success: true });
      })
      .catch(err => res.status(400).json({ errors: "Can't save activity" }));
  }
);

// @route  GET api/activities/:userId
// @desc   Return activities of a specific user from the last 7 days
// @access Admin
router.get(
  "/:userId/week",
  AdminAuthenticate,
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.user = req.params.userId;
    getActivities(req, res, 7);
  }
);

// @route  GET api/activities/:userId
// @desc   Return activities of a specific user from the last 30 days
// @access Admin
router.get(
  "/:userId/month",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  (req, res) => {
    req.user = req.params.userId;
    getActivities(req, res, 30);
  }
);

// @route  GET api/activities/:userId
// @desc   Return all activities of a specific user
// @access Admin
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  (req, res) => {
    req.user = req.params.userId;
    getActivities(req, res, 10000);
  }
);
