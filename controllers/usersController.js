const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const moment = require("moment");

const utils = require("../routes/utils");
const validateLogin = require("../validators/login");
const validateRegister = require("../validators/register");
const validateEdit = require("../validators/edit");

exports.createUser = (req, res, admin) => {
  const { errors, isValid } = validateRegister(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { email, username } = req.body;
  User.find({
    $or: [{ email }, { username }]
  }).then(users => {
    if (users.filter(user => user.email === req.body.email).length > 0)
      errors.email = "Email already in use";
    if (users.filter(user => user.username === req.body.username).length > 0)
      errors.username = "Username already in use";
    if (!utils.isEmpty(errors)) return res.status(400).json({ errors });

    const newUser = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      username: req.body.username,
      fullName: req.body.fullName,
      password: req.body.password,
      birthdate: moment(req.body.birthdate, "YYYY-MM-DD"),
      admin: admin
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
              res.status(201).json({
                success: "true",
                action: "register",
                data: {
                  fullName: user.fullName,
                  email: user.email,
                  username: user.username,
                  admin: user.admin
                }
              });
            })
            .catch(err => res.status(500));
        });
      })
      .catch(err => res.status(500));
  });
};

exports.loginUser = (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) res.status(400).json({ errors });

  const { password, username } = req.body;

  User.findOne({ $or: [{ email: username }, { username: username }] })
    .then(user => {
      if (!user) {
        errors.username = "Username/Email not found";
        return res.status(404).json({ errors });
      }

      // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: user.id,
            full_name: user.full_name,
            username: user.username,
            email: user.email,
            admin: user.admin,
            avatar: user.avatar
          }; // JWT Payload
          User.findOneAndUpdate(
            { $or: [{ email: username }, { username: username }] },
            { $set: { loggedAt: Date.now() } }
          ).then(() => {
            jwt.sign(
              payload,
              keys.secretOrKey,
              { expiresIn: 86400 },
              (err, token) => {
                res.json({
                  success: true,
                  action: "login",
                  token: "Bearer " + token
                });
              }
            );
          });
        } else {
          errors.password = "Password Incorrect";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(() => res.status(500));
};

exports.getCurrentUser = (req, res) => {
  res.json({
    success: "true",
    action: "get",
    data: {
      _id: req.user.id,
      fullName: req.user.fullName,
      username: req.user.username,
      email: req.user.email,
      admin: req.user.admin,
      avatar: req.user.avatar
    }
  });
};

exports.getAllUsers = (req, res) => {
  const { query } = req;
  User.find(query)
    .then(users => {
      User.count(query).then(count => {
        const filteredUsers = utils.removePasswordArray(users);
        res.json({
          success: "true",
          action: "get",
          count,
          data: filteredUsers
        });
      });
    })
    .catch(err => res.json({ errors: "Unable to get all users" }));
};

exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ errors: "User not found" });
      const filteredUser = utils.removePassword(user);
      res.json({ success: "true", action: "get", data: filteredUser });
    })
    .catch(err =>
      res.status(400).json({ errors: { objectID: "ObjectID is not valid" } })
    );
};

exports.editCurrentUser = (req, res) => {
  const { errors, isValid } = validateEdit(req.body);
  if (!isValid) return res.status(400).json({ errors });

  const { fullName, birthdate, phone, avatar } = req.body;
  User.findByIdAndUpdate(
    req.user.id,
    { $set: { fullName, birthdate, phone, avatar } },
    { new: true }
  )
    .then(user => {
      if (!user)
        res.status(404).json({ errors: { usernotfound: "User not found" } });
      const filteredUser = utils.removePassword(user);
      const { fullName, birthdate, phone, avatar } = filteredUser;
      const info = { fullName, birthdate, phone, avatar };
      res.json({ success: "true", action: "edit", data: info });
    })
    .catch(err =>
      res.status(400).json({ errors: { objectID: "ObjectID is not valid" } })
    );
};
