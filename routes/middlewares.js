const AdminAuthenticate = (req, res, next) => {
  if (req.user)
    req.user.admin
      ? next()
      : res.status(403).json({
          error: { notauthorized: "You need to be an admin to do that" }
        });
  else
    res.status(401).json({
      error: {
        notauthenticated: "You are not logged in"
      }
    });
};

// const validateUser = (req, res, next) => {
//   if (req.user)
//     req.user.validated
//       ? next()
//       : res.status(403).json({
//           error: {
//             notauthorized:
//               "You need to wait until an admin validates your registration."
//           }
//         });
// };

module.exports = {
  AdminAuthenticate
};
