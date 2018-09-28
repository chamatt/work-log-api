const validator = require("validator");
const { isEmpty, validatePhone, isValidDate } = require("../routes/utils");

const validateCategory = category => {
  let errors = {};

  if (!validator.isLength(category.name + "", { min: 3, max: 24 })) {
    errors.name = "Category name must have at between 3 and 24 characters";
  }

  if (validator.isEmpty(category.name + "")) {
    errors.name = "Category name field is required";
  }

  const isValid = isEmpty(errors) ? true : false;
  return { errors, isValid };
};

module.exports = validateCategory;
