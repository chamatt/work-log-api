const express = require("express");
const router = express.Router();
const passport = require("passport");

const { AdminAuthenticate } = require("../middlewares.js");
const usersController = require("../../controllers/usersController");

// @route  POST api/users/register
// @desc   Create new user
// @access Public
router.post("/register", (req, res) => {
  usersController.createUser(req, res, false);
});

// @route  POST api/users/register/admin
// @desc   Create new admin user
// @access Public
router.post(
  "/register/admin",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  (req, res) => {
    usersController.createUser(req, res, true);
  }
);

// @route  POST api/users/login
// @desc   Login User / Returns JWT payload
// @access Public
router.post("/login", usersController.loginUser);

// @route  GET api/users/me
// @desc   Return current user
// @access Private
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  usersController.getCurrentUser
);

// @route  GET api/users/all
// @desc   Return all users
// @access Admin
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  usersController.getAllUsers
);

// @route  GET api/users/:id
// @desc   Return specified user
// @access Admin
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  usersController.getUserById
);

// @route  PUT api/users/
// @desc   Edit current user
// @access Private
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  usersController.editCurrentUser
);

module.exports = router;
