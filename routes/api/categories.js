const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Category = require("../../models/Category");

// @route  GET api/categories
// @desc   Get all categories
// @query  name
// @access Private
router.get(
  "/",
  //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Category.find(req.query)
      .then(cats => {
        res.json(cats);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route  POST api/categories
// @desc   create a new category
// @access Admin
router.post(
  "/",
  //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Category.find({ name: req.body.name })
      .then(cats => {
        if (cats.length == 0) {
          const newCat = new Category({
            name: req.body.name
          });
          newCat
            .save()
            .then(() =>
              res.json({ success: "true", data: { ...newCat._doc } })
            );
        } else {
          res.status(400).json({ error: "Category already exists" });
        }
      })
      .catch(err => res.status(400).json(err));
  }
);

// @route  DELETE api/categories/:ID
// @desc   Deletes a category by id
// @access Admin
router.delete(
  "/:id",
  //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Category.findOne({ _id: req.params.id })
      .then(cat => {
        const data = cat._doc;
        cat.remove().then(() => res.json({ sucess: "true", data }));
      })
      .catch(() =>
        res.status(404).json({ error: "There's no category with this id" })
      );
  }
);

// @route  PUT api/categories
// @desc   Updates a category
// @access Admin
router.put(
  "/:id",
  //passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Category.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    )
      .then(cat => {
        res.json({ sucess: "true", data: cat });
      })
      .catch(() =>
        res.status(404).json({ error: "There's no category with this id" })
      );
  }
);

module.exports = router;
