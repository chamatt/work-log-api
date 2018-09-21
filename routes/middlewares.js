const AdminAuthenticate = (req, res, next) => {
  if (req.user)
    req.user.admin
      ? next()
      : res.status(403).json({ error: "You need to be an admin to do that" });
  else res.status(403).json({ error: "You are not logged in" });
};

module.exports = {
  AdminAuthenticate
};
