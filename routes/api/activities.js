const express = require("express");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const Activity = require("../../models/Ativity");
const User = require("../../models/User");

const { AdminAuthenticate } = require("../middlewares");
const activitiesController = require("../../controllers/activitiesController");
module.exports = router;

/**
 * @api {get} /api/activities/me/:days Get Last X Days Activities From Current User
 * @apiGroup Activities
 * @apiSampleRequest /api/activities/me/:days
 * @apiPermission Private
 * @apiHeader {String} Authorization JWT Token
 *
 * @apiParam (Query params) {Number} [page=1] Page (Each page has 25 activities at most)
 * @apiParam (URL Params) {Number} days How many days of activities you want to get
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Number} totalPages Total number of pages in the request
 * @apiSuccess {Number} page Current page
 * @apiSuccess {Object[]} data Category data
 * @apiSuccess {Object[]} data.category categories list
 * @apiSuccess {String} data.category._id Category ID
 * @apiSuccess {String} data.category.name Category Name
 * @apiSuccess {String} data.date Date of activity
 * @apiSuccess {String} data.length Length of activity
 * @apiSuccess {String} data.description Activity description
 * @apiSuccess {Object} data.user Owner of activity
 * @apiSuccess {String} data.user._id User ID
 * @apiSuccess {String} data.user.username Username
 * @apiSuccess {String} data.user.name User Fullname
 *
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *  {
 *     "totalPages": 1,
 *     "page": 1,
 *     "data": [
 *       {
 *         "category": [
 *           {
 *             "_id": "5ba44feca2504832a88c1edf",
 *             "name": "Mobile"
 *           },
 *           {
 *             "_id": "5ba44ffda2504832a88c1ee0",
 *             "name": "Web"
 *           }
 *         ],
 *         "_id": "5ba941ed77993b6aacdc4e7e",
 *         "date": "2018-09-23T03:00:00.000Z",
 *         "length": "2018-09-24T03:01:00.000Z",
 *         "description": "Did some things",
 *         "user": {
 *           "_id": "5ba532b3ec4a3f764d02b665",
 *           "username": "johnsmith",
 *           "fullName": "John Smith"
 *         },
 *         "__v": 0
 *       }
 *     ]
 *   }
 *
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 *
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.get(
  "/me/:days",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    activitiesController.getActivities(req, res, req.param.days);
  }
);

/**
 * @api {get} /api/activities/me Get All Activities From Current User
 * @apiGroup Activities
 * @apiSampleRequest /api/activities/me
 * @apiPermission Private
 * @apiHeader {String} Authorization JWT Token
 *
 * @apiParam (Query params) {Number} [page=1] Page (Each page has 25 activities at most)
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Number} totalPages Total number of pages in the request
 * @apiSuccess {Number} page Current page
 * @apiSuccess {Object[]} data Category data
 * @apiSuccess {Object[]} data.category categories list
 * @apiSuccess {String} data.category._id Category ID
 * @apiSuccess {String} data.category.name Category Name
 * @apiSuccess {String} data.date Date of activity
 * @apiSuccess {String} data.length Length of activity
 * @apiSuccess {String} data.description Activity description
 * @apiSuccess {Object} data.user Owner of activity
 * @apiSuccess {String} data.user._id User ID
 * @apiSuccess {String} data.user.username Username
 * @apiSuccess {String} data.user.name User Fullname
 *
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *  {
 *     "totalPages": 1,
 *     "page": 1,
 *     "data": [
 *       {
 *         "category": [
 *           {
 *             "_id": "5ba44feca2504832a88c1edf",
 *             "name": "Mobile"
 *           },
 *           {
 *             "_id": "5ba44ffda2504832a88c1ee0",
 *             "name": "Web"
 *           }
 *         ],
 *         "_id": "5ba941ed77993b6aacdc4e7e",
 *         "date": "2018-09-23T03:00:00.000Z",
 *         "length": "2018-09-24T03:01:00.000Z",
 *         "description": "Did some things",
 *         "user": {
 *           "_id": "5ba532b3ec4a3f764d02b665",
 *           "username": "johnsmith",
 *           "fullName": "John Smith"
 *         },
 *         "__v": 0
 *       }
 *     ]
 *   }
 *
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 *
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
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
router.delete(
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
