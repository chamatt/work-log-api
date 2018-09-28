const validator = require("validator");
const { isEmpty, validatePhone, isValidDate } = require("../routes/utils");

const validateUser = user => {
  let errors = {};

  if (!validator.isEmail(user.email)) {
    errors.email = "Email is not valid";
  }
  if (validator.isEmpty(user.email + "")) {
    errors.email = "Email field is required";
  }

  if (!validator.isLength(user.username + "", { min: 6, max: 24 })) {
    errors.username = "Username must have between 6 and 24 characters";
  }
  if (validator.isEmpty(user.username + "")) {
    errors.username = "Username field is required";
  }

  if (!validator.isLength(user.password, { min: 6, max: 24 })) {
    errors.password = "Password must have between 6 and 24 characters";
  }
  if (validator.isEmpty(user.password + "")) {
    errors.password = "Password field is required";
  }

  if (!(user.password === user.password2)) {
    errors.password2 = "Passwords don't match";
  }
  if (validator.isEmpty(user.password2 + "")) {
    errors.password2 = "Confirm password field is required";
  }

  if (validator.isEmpty(user.fullName + "")) {
    errors.password2 = "Full name field is required";
  }

  if (!isValidDate(user.birthdate + "")) {
    errors.birthdate =
      "Invalid birthdate, dates must be in the following format: YYYY-MM-DD";
  }

  if (user.phone && !validatePhone(user.phone + "")) {
    errors.phone = "Invalid phone number";
  }

  const isValid = isEmpty(errors) ? true : false;
  return { errors, isValid };
};

module.exports = validateUser;
