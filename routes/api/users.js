const express = require("express");
const router = express.Router();
const User = require("../../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

const { AdminAuthenticate } = require("../middlewares.js");

// @route  POST api/users/register
// @desc   Create new user
// @access Public
router.post("/register", (req, res) => {
  // Do some validations
  const errors = {};
  const { email, username } = req.body;
  User.find({
    $or: [{ email }, { username }]
  }).then(users => {
    if (users.filter(user => user.email === req.body.email).length > 0)
      errors.email = "Email already in use";
    if (users.filter(user => user.username === req.body.username).length > 0)
      errors.username = "Username already in use";
    if (!isEmpty(errors)) return res.status(400).json(errors);

    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      fullName: req.body.fullName,
      password: req.body.password,
      birthdate: Date.parse(req.body.birthdate)
    });
    if (req.body.phone) newUser.phone = req.body.phone;

    bcrypt
      .genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.json({
                full_name: user.full_name,
                email: user.email,
                username: user.username
              });
            })
            .catch(err => console.log(err));
        });
      })
      .catch(err => res.status(400).json(err.errors));
  });
});

router.post(
  "/admin",
  passport.authenticate("jwt", { session: false }),
  AdminAuthenticate,
  (req, res) => {
    // Do some validations
    const errors = {};
    const { email, username } = req.body;
    User.find({
      $or: [{ email }, { username }]
    }).then(users => {
      if (users.filter(user => user.email === req.body.email).length > 0)
        errors.email = "Email already in use";
      if (users.filter(user => user.username === req.body.username).length > 0)
        errors.username = "Username already in use";
      if (!isEmpty(errors)) return res.status(400).json(errors);

      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        fullName: req.body.fullName,
        password: req.body.password,
        birthdate: Date.parse(req.body.birthdate),
        admin: true
      });
      if (req.body.phone) newUser.phone = req.body.phone;

      bcrypt
        .genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                res.json({
                  full_name: user.full_name,
                  email: user.email,
                  username: user.username
                });
              })
              .catch(err => console.log(err));
          });
        })
        .catch(err => res.status(400).json(err.errors));
    });
  }
);

// @route  POST api/users/login
// @desc   Login User / Returns JWT payloda
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          full_name: user.full_name,
          username: user.username,
          email: user.email,
          admin: user.admin
        }; // JWT Payload

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 86400 },
          (err, token) => {
            res.json({
              sucess: true,
              token: "Bearer " + token
            });
          }
        );
        user.loggedAt = Date.now;
        user.save();
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route  GET api/users/current
// @desc   Return current user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      fullName: req.user.fullName,
      username: req.user.username,
      email: req.user.email,
      admin: req.user.admin
    });
  }
);

// @route  GET api/users/all
// @desc   Return all users
// @access Admin
router.get("/all", (req, res) => {
  const { query } = req;
  User.findOne()
    .then(users => {
      const filteredUsers = removePasswordArray(users);
      console.log(quecaralho);
      res.json(users);
    })
    .catch(err => res.json(err));
});

module.exports = router;
