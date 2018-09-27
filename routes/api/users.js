const express = require("express");
const router = express.Router();
const passport = require("passport");

const { AdminAuthenticate } = require("../middlewares.js");
const usersController = require("../../controllers/usersController");

/**
 * @api {post} /api/users/register Register a new user
 * @apiGroup Users
 * @apiSampleRequest http://localhost:3001/api/users/register
 * @apiPermission Public
 * 
 * @apiParam (Request Body) {String} username Username (Required)
 * @apiParam (Request Body) {String} email Email (Required)
 * @apiParam (Request Body) {String} password Password (Required) (Minimum 6 characters)
 * @apiParam (Request Body) {String} password2 Confirm Password (Required) (Minimum 6 characters)
 * @apiParam (Request Body) {String} fullName Full Name (Required)
 * @apiParam (Request Body) {String} birthdate Birth Date (Required) (Format: YYYY-MM-DD)
 * @apiParam (Request Body) {String} phone Phone or Mobile Number (Required) (Format: 11999998888)
 *
 
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
 * @apiSuccess {String} data.fullName Full name
 * @apiSuccess {String} data.email User email
 * @apiSuccess {String} data.username Username
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
 * @apiError {String} ValidationError.email Email validations
 * @apiError {String} ValidationError.username Username validations
 * @apiError {String} ValidationError.password Password validations
 * @apiError {String} ValidationError.password2 Confirm Password validations
 * @apiError {String} ValidationError.birthdate Birthdate validations
 * @apiError {String} ValidationError.phone Phone validations
 * @apiErrorExample {json} Validation Error
 * HTTP/1.1 400 Bad Request
 * {
 *  "email": "Email is not valid",
 *  "username": "Username must have at least 6 characters",
 *  "password": "Password must have at least 6 characters",
 *  "password2": "Full name field is required",
 *  "birthdate": "Invalid birthdate, dates must be in the following format: YYYY-MM-DD",
 *  "phone": "Invalid phone number"
 *
 * }
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.post("/register", (req, res) => {
  usersController.createUser(req, res, false);
});

/**
 * @api {post} /api/users/register/admin Register a new admin user
 * @apiGroup Users
 * @apiSampleRequest http://localhost:3001/api/users/register/admin
 * @apiPermission Admin
 * @apiHeader {String} Authorization JWT Token
 * @apiParam (Request Body) {String} username Username (Required)
 * @apiParam (Request Body) {String} email Email (Required)
 * @apiParam (Request Body) {String} password Password (Required) (Minimum 6 characters)
 * @apiParam (Request Body) {String} password2 Confirm Password (Required) (Minimum 6 characters)
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
 * @apiSuccess {String} data.fullName Full name
 * @apiSuccess {String} data.email User email
 * @apiSuccess {String} data.username Username
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
 * @apiError {String} ValidationError.email Email validations
 * @apiError {String} ValidationError.username Username validations
 * @apiError {String} ValidationError.password Password validations
 * @apiError {String} ValidationError.birthdate Birthdate validations
 * @apiError {String} ValidationError.phone Phone validations
 * @apiErrorExample {json} Validation Error
 * HTTP/1.1 400 Bad Request
 * {
 *  "email": "Email is not valid",
 *  "username": "Username must have at least 6 characters",
 *  "password": "Password must have at least 6 characters",
 *  "password2": "Full name field is required",
 *  "birthdate": "Invalid birthdate, dates must be in the following format: YYYY-MM-DD",
 *  "phone": "Invalid phone number"
 *
 * }
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.post(
  "/register/admin",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  (req, res) => {
    usersController.createUser(req, res, true);
  }
);

/**
 * @api {post} /api/users/login Login a user and returns token
 * @apiGroup Users
 * @apiPermission Public
 * @apiSampleRequest http://localhost:3001/api/users/login
 *
 * @apiParam (Request Body) {String} username Username or Email (Required)
 * @apiParam (Request Body) {String} password Password (Required)
 *
 * @apiParamExample {json} Input
 *    {
 *      "username": "johnsmith",
 *      "password": "j0nH5m17h"
 *    }
 * @apiSuccess {Boolean} sucess Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {String} token JWT Token
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
 * @apiError {json} ValidationError Validation failed for login fields
 * @apiError {String} ValidationError.email Email validations
 * @apiError {String} ValidationError.username Username validations
 * @apiErrorExample {json} Validation Error
 * HTTP/1.1 400 Bad Request
 * {
 *  "username": "Username/Email not found",
 *  "password": "Password Incorrect"
 * }
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.post("/login", usersController.loginUser);

/**
 * @api {post} /api/users/me Get logged user informations
 * @apiGroup Users
 * @apiPermission Private
 * @apiHeader {String} Authorization JWT Token
 * @apiSampleRequest http://localhost:3001/api/users/me
 * @apiSuccess {Boolean} sucess Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {String} data
 *
 * @apiSuccess {String} data.id Id
 * @apiSuccess {String} data.fullName Full Name
 * @apiSuccess {String} data.email Email
 * @apiSuccess {String} data.username Username
 * @apiSuccess {Boolean} data.admin Is Admin
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": "true",
 *      "action": "get",
 *      "data": {
 *        "id": "5baab405aef55939f01a3de1",
 *        "fullName": "John Smith",
 *        "email": "john.smith@gmail.com",
 *        "username": "johnsmith",
 *        "admin": true
 *      }
 *    }
 *
 * @apiErrorExample {json} Not Logged In
 * HTTP/1.1 401 Unauthorized
 */
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
