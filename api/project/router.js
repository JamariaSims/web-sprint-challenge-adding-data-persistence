// build your `/api/projects` router here
const express = require("express");
const projectsFunctions = require("./model");
const router = express.Router();
router.get("/", async (req, res, next) => {
  const data = await projectsFunctions.getProjects();
  res.status(200).json(data);
});
router.get("/:id", async (req, res, next) => {
  const data = await projectsFunctions.getProject(req.params.id);
  res.status(200).json(data);
});
router.post("/", async (req, res, next) => {
  try {
    const data = await projectsFunctions.postProject(req.body);
    res.status(201).json(data);
  } catch {
    next();
  }
});

module.exports = router;
