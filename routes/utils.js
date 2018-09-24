const removePassword = user => {
  delete user["password"];
  delete user._doc["password"];
  return user;
};
const removePasswordArray = users => {
  return users.map(user => removePassword(user));
};

module.exports = { removePassword, removePasswordArray };
