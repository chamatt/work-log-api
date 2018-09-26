const express = require("express");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const Activity = require("../../models/Ativity");
const User = require("../../models/User");

const { AdminAuthenticate } = require("../middlewares");
const activitiesController = require("../../controllers/activitiesController");
module.exports = router;

// @route  GET api/activities/me/week
// @desc   Return my activities from the last 7 days
// @access Private
router.get(
  "/me/week",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    activitiesController.getActivities(req, res, 7);
  }
);
// @route  GET api/activities/me/month
// @desc   Return my activities from the last 30 days
// @access Private
router.get(
  "/me/month",
  passport.authenticate("jwt", { session: false }),
  (req, res) => activitiesController.getActivities(req, res, 30)
);

// @route  GET api/activities/me/
// @desc   Return my activities from all time
// @access Private
router.get(
  "/me/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => activitiesController.getActivities(req, res, 10000)
);

// @route  POST api/activities
// @desc   Create a new activity
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  activitiesController.createActivity
);

// @route  PUT api/activities/:id
// @desc   Updates an activity
// @access Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  activitiesController.editActivity
);

// @route  DELETE api/activities/:id
// @desc   Deletes an activity
// @access Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  activitiesController.deleteActivity
);

// @route  GET api/activities/user/:userId
// @desc   Return activities of a specific user from the last 7 days
// @access Admin
router.get(
  "/:userId/week",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  (req, res) => {
    req.user.id = req.params.userId;
    activitiesController.getActivities(req, res, 7);
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
    req.user.id = req.params.userId;
    activitiesController.getActivities(req, res, 30);
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
    req.user.id = req.params.userId;
    activitiesController.getActivities(req, res, 10000);
  }
);
