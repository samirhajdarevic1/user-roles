function basicAuth(req, res, next) {
  const user = req.user;
  if (!user) {
    res.status(403);
    return res.send("Not signed in!");
  }
  next();
}

function authRole(role) {
  return (req, res, next) => {
    const usrRole = req.user.role;
    if (role !== usrRole) {
      res.status(401);
      return res.send("Don't have acces to this!");
    }
    next();
  };
}

module.exports = {
  basicAuth,
  authRole,
};
