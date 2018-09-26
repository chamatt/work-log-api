const removePassword = user => {
  delete user["password"];
  delete user._doc["password"];
  return user;
};
const removePasswordArray = users => {
  return users.map(user => removePassword(user));
};
const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

const validatePhone = phone => {
  var RegExp = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/;
  return RegExp.test(phone);
};

const isValidDate = dateString => {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateString.match(regEx)) return false; // Invalid format
  var d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return false; // Invalid date
  return d.toISOString().slice(0, 10) === dateString;
};

module.exports = {
  removePassword,
  removePasswordArray,
  isEmpty,
  validatePhone,
  isValidDate
};
