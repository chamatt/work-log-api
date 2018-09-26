const express = require("express");
const router = express.Router();
const passport = require("passport");

const { AdminAuthenticate } = require("../middlewares.js");
const categoriesController = require("../../controllers/categoriesController");

// @route  GET api/categories
// @desc   Get all categories
// @query  name
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  categoriesController.getCategories
);

// @route  POST api/categories
// @desc   Create a new category
// @access Admin
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  categoriesController.createCategory
);

// @route  DELETE api/categories/:id
// @desc   Delete a category
// @access Admin
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  categoriesController.deleteCategory
);

// @route  PUT api/categories
// @desc   Update a category
// @access Admin
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  categoriesController.editCategory
);

module.exports = router;
