const express = require("express");
const router = express.Router();
const { projects, ROLE } = require("../data");
const { basicAuth } = require("../basicAuth");
const { canViewProject, scopedProjects } = require("../permissions/project");

router.get("/", (req, res, next) => {
  res.json(scopedProjects(req.user, projects));
});

router.get(
  "/:projectId",
  setProject,
  basicAuth,
  authGetProject,
  (req, res, next) => {
    res.json(req.project);
  }
);

function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId);
  req.project = projects.find((project) => project.id === projectId);

  if (req.project == null) {
    res.status(404);
    return res.send("Project not found");
  }
  next();
}

function authGetProject(req, res, next) {
  if (!canViewProject(req.user, req.project)) {
    res.status(401);
    return res.send("Can not view project");
  }
  next();
}

module.exports = router;
