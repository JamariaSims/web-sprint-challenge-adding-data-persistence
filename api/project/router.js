// build your `/api/projects` router here
const express = require("express");
const projectsFunctions = require("./model");
const router = express.Router();
router.post("/", async (req, res, next) => {
  next();
});
router.get("/", async (req, res, next) => {
  const data = await projectsFunctions.getProjects();
  res.status(200).json(data);
});

module.exports = router;
