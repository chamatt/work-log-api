const validator = require("validator");
const { isEmpty, isValidDate, validatePhone } = require("../routes/utils");

const validateUser = user => {
  let errors = {};

  // if (
  //   user.password &&
  //   !validator.isLength(user.password + "", { min: 6, max: undefined })
  // ) {
  //   errors.password = "Password must have at least 6 characters";
  // }

  // if (!(user.password === user.password2)) {
  //   errors.password2 = "Passwords don't match";
  // }
  // if (user.password && validator.isEmpty(user.password2 + "")) {
  //   errors.password2 = "Confirm password field is required";
  // }

  if (validator.isEmpty(user.fullName + "")) {
    errors.password = "Full name field is required";
  }

  if (user.birthdate && !isValidDate(user.birthdate + "")) {
    errors.birthdate = "Birthdate must be in the following format: YYYY-MM-DD";
  }

  if (user.phone && !validatePhone(user.phone + "")) {
    errors.phone = "Invalid phone number";
  }

  if (user.avatar && !validator.isURL(user.avatar + "")) {
    errors.avatar = "Invalid avatar URL";
  }

  const isValid = isEmpty(errors) ? true : false;
  return { errors, isValid };
};

module.exports = validateUser;
