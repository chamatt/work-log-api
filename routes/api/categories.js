const express = require("express");
const router = express.Router();
const passport = require("passport");

const { AdminAuthenticate } = require("../middlewares.js");
const categoriesController = require("../../controllers/categoriesController");

/**
 * @api {get} /api/categories Get All Categories
 * @apiGroup Categories
 * @apiSampleRequest /api/categories
 * @apiPermission Private
 * @apiHeader {String} Authorization JWT Token
 *
 * @apiParam (Query params) {String} [name] Category name
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object[]} data Category data
 * @apiSuccess {String} data.name Category name
 * @apiSuccess {String} data._id Category ID
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "success": true,
 *	    "action": "get",
 *      "count": "1"
 *	    "data": [
 *		   {
 *		  	  "_id": "5ba44feca25048d2d88c1edf",
 *		  	  "name": "Web",
 *	    	}
 *      ]
 *   }
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 *
 * @apiErrorExample {json} Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  categoriesController.getCategories
);

/**
 * @api {post} /api/categories Create a new category
 * @apiGroup Categories
 * @apiSampleRequest /api/categories
 * @apiPermission Admin
 * @apiHeader {String} Authorization JWT Token
 *
 * @apiParam (Request Body) {String} name Category name
 *
 * @apiParamExample {json} Input
 *    {
 *      "Name": "Web"
 *    }
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data Category data
 * @apiSuccess {String} data.name Category name
 * @apiSuccess {String} data._id Category ID
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 Created
 *    {
 *      "success": true,
 *	    "action": "create",
 *	    "data":
 *		   {
 *		  	  "_id": "5ba44feca25048d2d88c1edf",
 *		  	  "name": "Web",
 *		   	"__v": 0
 *	    	}
 *    }
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 * @apiError 403 NotAdmin
 * @apiErrorExample {json} NotAdmin
 * HTTP/1.1 403 Forbidden
 *
 * @apiError 400 DuplicateCategory
 * @apiErrorExample {json} DuplicateCategory
 * HTTP/1.1 400 Bad Request
 * { errors: "Category already exists" }
 * @apiErrorExample {json} 500 Internal Server Error
 * HTTP/1.1 500 Internal Server Error
 */
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  categoriesController.createCategory
);

/**
 * @api {DELETE} /api/categories/:id Deletes an specific category
 * @apiGroup Categories
 * @apiSampleRequest /api/categories/:id
 * @apiPermission Admin
 * @apiHeader {String} Authorization JWT Token
 *
 * @apiParam (URL Param) {String} id Category ID
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data User data
 * @apiSuccess {String} data.name Deleted category name
 * @apiSuccess {String} data._id Deleted category id
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 Created
 *    {
 *      "success": true,
 *	    "action": "delete",
 *	    "data":
 *		   {
 *		  	  "_id": "5ba44feca25048d2d88c1edf",
 *		  	  "name": "Web",
 *		   	  "__v": 0
 *	    	}
 *    }
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 * @apiError 403 NotAdmin
 * @apiErrorExample {json} NotAdmin
 * HTTP/1.1 403 Forbidden
 *
 * @apiError 404 CategoryNotFound
 * @apiErrorExample {json} CategoryNotFound
 * HTTP/1.1 404 Not Found
 * { errors: {categorynotfound: "There's no category with this id"} }
 * @apiError 400 ObjectID Invalid
 * @apiErrorExample {json} ObjectID Invalid
 * HTTP/1.1 400 Bad Request
 * { errors: {objectID: "ObjectID is not valid"}
 */
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  categoriesController.deleteCategory
);

/**
 * @api {PUT} /api/categories/:id Updates a category
 * @apiGroup Categories
 * @apiSampleRequest /api/categories/:id
 * @apiPermission Admin
 * @apiHeader {String} Authorization JWT Token
 *
 * @apiParam (URL Param) {String} id Category ID
 *
 * @apiParam (Request Body) {String} name Category name
 *
 * @apiParamExample {json} Input
 *    {
 *      "Name": "Web"
 *    }
 *
 * @apiSuccess {Boolean} success Request Status
 * @apiSuccess {String} action Action performed
 * @apiSuccess {Object} data User data
 * @apiSuccess {String} data.name Deleted category name
 * @apiSuccess {String} data._id Deleted category id
 *
 *
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 Created
 *    {
 *      "success": true,
 *	    "action": "delete",
 *	    "data":
 *		   {
 *		  	  "_id": "5ba44feca25048d2d88c1edf",
 *		  	  "name": "Web",
 *		   	  "__v": 0
 *	    	}
 *    }
 *
 * @apiError 401 NotLoggedIn
 * @apiErrorExample {json} NotLoggedIn
 * HTTP/1.1 401 Unauthorized
 * @apiError 403 NotAdmin
 * @apiErrorExample {json} NotAdmin
 * HTTP/1.1 403 Forbidden
 *
 * @apiError 404 CategoryNotFound
 * @apiErrorExample {json} CategoryNotFound
 * HTTP/1.1 404 Not Found
 * { errors: {categorynotfound: "There's no category with this id"} }
 * @apiError 400 ObjectID Invalid
 * @apiErrorExample {json} ObjectID Invalid
 * HTTP/1.1 400 Bad Request
 * { errors: {objectID: "ObjectID is not valid"}
 */
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  categoriesController.editCategory
);

module.exports = router;
