const validator = require("validator");
const isEmpty = require("../routes/utils").isEmpty;

const validateUser = user => {
  let errors = {};

  if (!validator.isEmail(user.email)) {
    errors.email = "Email is not valid";
  }
  if (validator.isEmpty(user.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isLength(user.username, { min: 6, max: undefined })) {
    errors.email = "Username must have at least 6 characters";
  }
  if (validator.isEmpty(user.username)) {
    errors.email = "Username field is required";
  }

  if (!validator.isLength(user.password, { min: 6, max: undefined })) {
    errors.email = "Password must have at least 6 characters";
  }
  if (validator.isEmpty(user.password)) {
    errors.email = "Password field is required";
  }

  if (!validator.isISO8601(user.birthdate)) {
    errors.birthdate = "Birthdate must be in the following format: YYYY-MM-DD";
  }

  const isValid = isEmpty(errors) ? true : false;
  return { errors, isValid };
};

module.exports = validateUser;
