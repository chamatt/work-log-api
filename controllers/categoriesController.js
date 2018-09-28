const Category = require("../models/Category");
const validateCategory = require("../validators/categories");

exports.getCategories = (req, res) => {
  Category.find(req.query)
    .then(cats => {
      Category.count(req.query).then(count => {
        res.json({ success: true, action: "get", count, data: cats });
      });
    })
    .catch(err => res.status(404).json(err));
};

exports.createCategory = (req, res) => {
  const { errors, isValid } = validateCategory(req.body);
  if (!isValid) return res.json({ errors });

  Category.find({ name: req.body.name })
    .then(cats => {
      if (cats.length == 0) {
        const newCat = new Category({
          name: req.body.name
        });
        newCat.save().then(() =>
          res.json({
            success: "true",
            action: "create",
            data: { ...newCat._doc }
          })
        );
      } else {
        res
          .status(400)
          .json({ errors: { alreadyexists: "Category already exists" } });
      }
    })
    .catch(err => res.status(500));
};

exports.deleteCategory = (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then(cat => {
      if (!cat)
        return res.status(404).json({
          errors: { categorynotfound: "There's no category with this id" }
        });
      const data = cat._doc;
      cat
        .remove()
        .then(() => res.json({ success: "true", action: "delete", data }));
    })
    .catch(() =>
      res.status(400).json({
        errors: { objectID: "ObjectID is not valid" }
      })
    );
};

exports.editCategory = (req, res) => {
  Category.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .then(cat => {
      if (!cat)
        return res.status(404).json({
          errors: { categorynotfound: "There's no category with this id" }
        });
      res.json({ success: "true", action: "edit", data: cat });
    })
    .catch(() =>
      res.status(400).json({
        errors: { objectID: "ObjectID is not valid" }
      })
    );
};
