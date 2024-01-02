const express = require("express");
const router = express.Router();
const { projects } = require("../data");

router.get("/", (req, res) => {
  res.json(projects);
});

router.get("/projectId", setProject, (req, res) => {
  res.json(req.project);
});

function setProject(req, res, next) {}
