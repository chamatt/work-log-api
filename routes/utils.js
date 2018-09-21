const removePassword = user => {
  const removeIndex = Object.keys(user).indexOf("password");
  if (removeIndex != -1) user.splice(removeIndex, 1);
  return user;
};
const removePasswordArray = users => {
  return users.map(user => removePassword(user));
};

module.exports = { removePassword, removePasswordArray };
