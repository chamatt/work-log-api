const express = require("express");
const router = express.Router();
const passport = require("passport");

// Multipart form data handler middleware
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const autoReap = require("multer-autoreap");

const { AdminAuthenticate, validateUser } = require("../middlewares.js");
const usersController = require("../../controllers/usersController");

/**
 * @api {post} /api/users/register Register User
 * @apiGroup 2 Users
 * @apiSampleRequest /api/users/register
 * @apiPermission Public
 * 
 * @apiParam (Request Body) {String} username Username
 * @apiParam (Request Body) {String} email Email
 * @apiParam (Request Body) {String} password Password (Minimum 6 characters)
 * @apiParam (Request Body) {String} password2 Confirm Password (Minimum 6 characters)
 * @apiParam (Request Body) {String} fullName Full Name
 * @apiParam (Request Body) {String} birthdate Birth Date (Format: YYYY-MM-DD)
 * @apiParam (Request Body) {String} [phone] Phone or Mobile Number (Format: 11999998888)
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
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data User data
 * @apiSuccess {String} data.fullName Full name
 * @apiSuccess {String} data.email User email
 * @apiSuccess {String} data.username Username
 * @apiSuccess {String} data.admin Admin permission
 * @apiSuccess {String} data.validated Default to false, an admin needs to aprove registration for the account to be validated
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 Created
 *    {
 *      "success": "true",
 *      "action": "register",
 *      "data": {
 *        "fullName": "John Smith",
 *        "email": "john.smith@gmail.com",
 *        "username": "johnsmith",
 *        "admin": false,
 *        "validated": false
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
 *  "username": "Username must have between 6 and 24 characters",
 *  "password": "Password must have between 6 and 24 characters",
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
 * @api {post} /api/users/register/admin Register Admin User
 * @apiGroup 2 Users
 * @apiSampleRequest /api/users/register/admin
 * @apiPermission Admin
 * @apiHeader {String} Authorization JWT Token
 * @apiParam (Request Body) {String} username Username
 * @apiParam (Request Body) {String} email Email
 * @apiParam (Request Body) {String} password Password (Minimum 6 characters)
 * @apiParam (Request Body) {String} password2 Confirm Password (Minimum 6 characters)
 * @apiParam (Request Body) {String} fullName Full Name
 * @apiParam (Request Body) {String} birthdate Birth Date (Format: YYYY-MM-DD)
 * @apiParam (Request Body) {String} [phone] Phone or Mobile Number (Format: 11999998888)
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
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data User data
 * @apiSuccess {String} data.fullName Full name
 * @apiSuccess {String} data.email User email
 * @apiSuccess {String} data.username Username
 * @apiSuccess {String} data.admin Admin permission
 * @apiSuccess {String} data.validated Default to true, an admin registration gets validated automatically
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": "true",
 *      "action": "register",
 *      "data": {
 *        "fullName": "John Smith",
 *        "email": "john.smith@gmail.com",
 *        "username": "johnsmith",
 *        "admin": true,
 *        "validated": true,
 *      }
 *    }
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 * @apiError 403 NotAdmin
 * @apiErrorExample {json} NotAdmin
 * HTTP/1.1 403 Forbidden
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
 *  "username": "Username must have between 6 and 24 characters",
 *  "password": "Password must have between 6 and 24 characters",
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
 * @api {post} /api/users/login Login User
 * @apiGroup 2 Users
 * @apiPermission Public
 * @apiSampleRequest /api/users/login
 *
 * @apiParam (Request Body) {String} username Username or Email
 * @apiParam (Request Body) {String} password Password
 *
 * @apiParamExample {json} Input
 *    {
 *      "username": "johnsmith",
 *      "password": "j0nH5m17h"
 *    }
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {String} token JWT Token
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": "true",
 *      "action": "register",
 *      "data": {
 *        "fullName": "John Smith",
 *        "email": "john.smith@gmail.com",
 *        "username": "johnsmith"
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
 * @api {get} /api/users/me Get Current User
 * @apiGroup 2 Users
 * @apiPermission Private
 * @apiHeader {String} Authorization JWT Token
 * @apiSampleRequest /api/users/me
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data
 *
 * @apiSuccess {String} data.id Id
 * @apiSuccess {String} data.fullName Full Name
 * @apiSuccess {String} data.email Email
 * @apiSuccess {String} data.username Username
 * @apiSuccess {Boolean} data.admin Is Admin
 *
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "action": "get",
 *      "data": {
 *        "_id": "5baab405aef55939f01a3de1",
 *        "fullName": "John Smith",
 *        "email": "john.smith@gmail.com",
 *        "username": "johnsmith",
 *        "admin": true
 *      }
 *    }
 *
 *
 * @apiErrorExample {json} Not Logged In
 * HTTP/1.1 401 Unauthorized
 */
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  usersController.getCurrentUser
);

/**
 * @api {get} /api/users/all Get All Users
 * @apiGroup 2 Users
 * @apiPermission Admin
 * @apiHeader {String} Authorization JWT Token
 * @apiSampleRequest /api/users/all
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object[]} data
 *
 * @apiSuccess {String} data._id Id
 * @apiSuccess {String} data.fullName Full Name
 * @apiSuccess {String} data.email Email
 * @apiSuccess {String} data.username Username
 * @apiSuccess {Date} data.birthdate Date of birth (YYYY-MM-DD)
 * @apiSuccess {String} data.phone Phone number
 * @apiSuccess {Date} data.createdAt Date of account creation
 * @apiSuccess {Date} data.loggedAt Last login
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "action": "get",
 *      "count": "12"
 *      "data": [{
 *        "admin": false,
 *        "phone": "27994949993",
 *        "_id": "5bae651e6866f10015d2b128",
 *        "fullName": "John Smith",
 *        "email": "john.smith@gmail.com",
 *        "username": "johnsmith",
 *        "birthdate": "2000-12-01T00:00:00.000Z",
 *        "createdAt": "2018-09-28T17:30:06.905Z",
 *        "loggedAt": "2018-09-28T17:30:06.905Z",
 *      }]
 *    }
 *
 * @apiErrorExample {json} Not Logged In
 * HTTP/1.1 401 Unauthorized
 * @apiErrorExample {json} Not an Admin
 * HTTP/1.1 403 Forbidden
 */
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  usersController.getAllUsers
);

router.post(
  "/avatar",
  passport.authenticate("jwt", { session: false }),
  upload.single("avatar"),
  autoReap,
  usersController.uploadAvatar
);

/**
 * @api {PUT} /api/users/me Edit Current User
 * @apiGroup 2 Users
 * @apiSampleRequest /api/users/me
 * @apiPermission Private
 * @apiHeader {String} Authorization JWT Token
 * 
 * @apiParam (Request Body) {String} [fullName] Full Name
 * @apiParam (Request Body) {String} [birthdate] Birth Date (Format: YYYY-MM-DD)
 * @apiParam (Request Body) {String} [phone] Phone or Mobile Number (Format: 11999998888)
 * @apiParam (Request Body) {String} [avatar] User avatar (Format: URL)
 *
 
 *
 * @apiParamExample {json} Input
 *    {
 *      "fullName": "John Smith",
 *      "birthdate": "2000-12-01",
 *      "phone": "27994949993",
 *      "avatar": "http://example.com/example.jpg"
 *    }
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data User data
 * @apiSuccess {String} data.fullName Full name
 * @apiSuccess {String} data.phone User phone
 * @apiSuccess {String} data.birthdate User birthdate
 * @apiSuccess {String} data.avatar User Avatar
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": "true",
 *      "action": "register",
 *      "data": {
 *        "fullName": "John Smith",
 *        "phone": "john.smith@gmail.com",
 *        "birthdate": "johnsmith",
 *        "avatar": "//apid/jonhthd324234234.jpg"
 *      }
 *    }
 *
 * @apiError 401 AuthenticationError
 * @apiErrorExample {json} AuthenticationError
 * HTTP/1.1 401 Unauthorized
 * 
 * @apiError {json} ValidationError Validation failed for edit fileds
 * @apiError {String} ValidationError.birthdate Birthdate validations
 * @apiError {String} ValidationError.phone Phone validations
 * @apiErrorExample {json} Validation Error
 * HTTP/1.1 400 Bad Request
 * {
 *  "birthdate": "Invalid birthdate, dates must be in the following format: YYYY-MM-DD",
 *  "phone": "Invalid phone number",
 *  "avatar": "Invalid avatar URL",
 *  "fullname": "Full name field is required"
 * }
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.put(
  "/me",
  passport.authenticate("jwt", { session: false }),
  usersController.editCurrentUser
);

/**
 * @api {PUT} /api/users/validate/:id Validate New User
 * @apiGroup 2 Users
 * @apiSampleRequest /api/users/validate/:id
 * @apiPermission Admin
 *
 * @apiHeader {String} Authorization JWT Token
 *
 * @apiParam (URL Params) {String} id User ID
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 Created
 *    {
 *      "success": "true",
 *      "action": "validate",
 *    }
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 * @apiError 403 NotAdmin
 * @apiErrorExample {json} NotAdmin
 * HTTP/1.1 403 Forbidden
 * @apiError 400 ObjectID Invalid
 * @apiErrorExample {json} ObjectID Invalid
 * HTTP/1.1 400 Bad Request
 * { "errors": {"objectID": "ObjectID is not valid"} }
 * @apiError 404 User not found
 * @apiErrorExample {json} User Not Found
 * HTTP/1.1 404 Not found
 * { "errors": { "notfound": "User not found" } }
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.put(
  "/validate/:id",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  usersController.validateUser
);

/**
 * @api {get} /api/users/:id Get User By Id
 * @apiGroup 2 Users
 * @apiPermission Admin
 * @apiHeader {String} Authorization JWT Token
 * @apiSampleRequest /api/users/:id
 * @apiParam (URL Params) {String} id User id (Required)
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data
 *
 * @apiSuccess {String} data._id Id
 * @apiSuccess {String} data.fullName Full Name
 * @apiSuccess {String} data.email Email
 * @apiSuccess {String} data.username Username
 * @apiSuccess {Date} data.birthdate Date of birth (YYYY-MM-DD)
 * @apiSuccess {String} data.phone Phone number
 * @apiSuccess {Date} data.createdAt Date of account creation
 * @apiSuccess {Date} data.loggedAt Last login
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *      "action": "get",
 *      "data": {
 *        "admin": false,
 *        "phone": "27994949993",
 *        "_id": "5bae651e6866f10015d2b128",
 *        "fullName": "John Smith",
 *        "email": "john.smith@gmail.com",
 *        "username": "johnsmith",
 *        "birthdate": "2000-12-01T00:00:00.000Z",
 *        "createdAt": "2018-09-28T17:30:06.905Z",
 *        "loggedAt": "2018-09-28T17:30:06.905Z",
 *      }
 *    }
 *
 * @apiErrorExample {json} Not Logged In
 * HTTP/1.1 401 Unauthorized
 * @apiErrorExample {json} Not an Admin
 * HTTP/1.1 403 Forbidden
 */
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  usersController.getUserById
);

module.exports = router;
