const express = require("express");
const router = express.Router();
const passport = require("passport");

const { AdminAuthenticate } = require("../middlewares.js");
const usersController = require("../../controllers/usersController");

/**
 * @api {post} /api/users/register Register a new user
 * @apiGroup Users
 * @apiParam (Request Body) {String} username Username (Required)
 * @apiParam (Request Body) {String} email Email (Required)
 * @apiParam (Request Body) {String} password Password (Required) (Minimum 6 characters)
 * @apiParam (Request Body) {String} fullName Full Name (Required)
 * @apiParam (Request Body) {String} birthdate Birth Date (Required) (Format: YYYY-MM-DD)
 * @apiParam (Request Body) {String} phone Phone or Mobile Number (Required) (Format: 11999998888)
 *
 * @apiParamExample {json} Input
 *    {
 *      "username": "johnsmith",
 *      "email": "john.smith@gmail.com"
 *      "password": "j0nH5m17h",
 *      "fullName": "John Smith",
 *      "birthdate": "2000-12-01",
 *      "phone": "27994949993"
 *    }
 * @apiSuccess {Boolean} sucess Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data User data
 * @apiSuccess (data fields) {String} fullName Full name
 * @apiSuccess (data fields) {String} email User email
 * @apiSuccess (data fields) {String} username Username
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      success: "true",
 *      action: "register",
 *      data: {
 *        fullName: "John Smith",
 *        email: "john.smith@gmail.com",
 *        username: "johnsmith"
 *      }
 *    }
 *
 * @apiError {json} ValidationError Validation failed for register fields
 * @apiErrorExample {json} Validation Error
 * HTTP/1.1 400 Bad Request
 * {
 *    email: "Invalid Email",
 *    password: "Password must have more than 6 characters"
 * }
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
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
