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

module.exports = { removePassword, removePasswordArray, isEmpty };
