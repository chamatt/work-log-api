const moment = require("moment");
const Activity = require("../models/Ativity");
const User = require("../models/User");

exports.getActivities = (req, res, days) => {
  const id = req.user.id;

  let { page, ...filter } = req.query;
  const perPage = 25;
  page = parseInt(page) || 1;
  days = parseInt(days);
  Activity.find({
    ...filter,
    user: id,
    date: { $gt: moment().subtract(days, "days") }
  })
    .sort({ date: -1 })
    .limit(perPage)
    .skip(perPage * page - perPage)
    .populate("user", ["id", "fullName", "username"])
    .populate("category", ["id", "name"])
    .then(activities => {
      Activity.count({
        ...filter,
        user: id,
        date: { $gt: moment().subtract(days, "days") }
      })
        .then(count =>
          res.json({
            totalPages: Math.ceil(count / perPage),
            page: page,
            data: activities
          })
        )
        .catch(err => res.status(400).json({ errors: "Unknown error" }));
    })
    .catch(err => res.status(400).json({ errors: "Unknown error" }));
};

exports.createActivity = (req, res) => {
  const id = req.user.id;

  const activity = new Activity({
    date: moment.utc(req.body.date, "YYYY-MM-DD"),
    length: moment.utc(req.body.length, "HH:mm"),
    category: req.body.category,
    description: req.body.description,
    user: req.user.id
  });

  activity
    .save()
    .then(() => {
      res.json({
        success: true,
        action: "create",
        data: {
          ...activity._doc
        }
      });
    })
    .catch(err =>
      res.status(400).json({ errors: { cantsave: "Can't save activity" } })
    );
};

exports.editActivity = (req, res) => {
  const { name, category, date, length, description } = req.body;
  Activity.findOne({ _id: req.params.id }).then(activity => {
    if (activity.user._id + "" !== req.user._id + "") {
      // console.log("ocaralho", activity.user._id, req.user._id);
      return res.status(403).json({
        errors: "You do not have permission to edit someone else's activity"
      });
    }
    Activity.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { name, category, date, length, description } },
      { new: true }
    )
      .then(result => res.json({ success: true, action: "edit", data: result }))
      .catch(() =>
        res.status(400).json({ errors: { objectID: "ObjectID is not valid" } })
      );
  });
};

exports.deleteActivity = (req, res) => {
  Activity.findOne({ _id: req.params.id })
    .then(activity => {
      if (activity.user._id + "" !== req.user._id + "") {
        return res.status(403).json({
          errors: {
            forbidden:
              "You do not have permission to delete someone else's activity"
          }
        });
      }
      Activity.findByIdAndRemove(req.params.id)
        .then(result =>
          res.json({ success: true, action: "delete", data: result })
        )
        .catch(() =>
          res
            .status(400)
            .json({ errors: { objectID: "ObjectID is not valid" } })
        );
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ errors: { objectID: "ObjectID is not valid" } });
    });
};
