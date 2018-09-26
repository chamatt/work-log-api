const Category = require("../models/Category");

exports.getCategories = (req, res) => {
  Category.find(req.query)
    .then(cats => {
      res.json(cats);
    })
    .catch(err => res.status(404).json(err));
};

exports.createCategory = (req, res) => {
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
        res.status(400).json({ errors: "Category already exists" });
      }
    })
    .catch(err => res.status(400).json(err));
};

exports.deleteCategory = (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then(cat => {
      const data = cat._doc;
      cat
        .remove()
        .then(() => res.json({ success: "true", action: "delete", data }));
    })
    .catch(() =>
      res.status(404).json({ error: "There's no category with this id" })
    );
};

exports.editCategory = (req, res) => {
  Category.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .then(cat => {
      res.json({ success: "true", action: "edit", data: cat });
    })
    .catch(() =>
      res.status(404).json({ errors: "There's no category with this id" })
    );
};
