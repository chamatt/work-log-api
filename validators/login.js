const validator = require("validator");
const isEmpty = require("../routes/utils").isEmpty;

const validateUser = user => {
  let errors = {};

  if (validator.isEmpty(user.username + "")) {
    errors.username = "Username field is required";
  }
  if (validator.isEmpty(user.password + "")) {
    errors.password = "Password field is required";
  }

  const isValid = isEmpty(errors) ? true : false;
  return { errors, isValid };
};

module.exports = validateUser;
