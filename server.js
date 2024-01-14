const express = require("express");
const app = express();
const { users, ROLE } = require("./data");
const projectRouter = require("./routes/projects");
const { basicAuth, authRole } = require("./basicAuth");

app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);
app.get("/", basicAuth, (req, res) => {
  res.send("Dashboard page");
});
app.get("/admin", basicAuth, authRole(ROLE.ADMIN), (req, res) => {
  res.send("Admin page");
});

app.listen(3000);

function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}
