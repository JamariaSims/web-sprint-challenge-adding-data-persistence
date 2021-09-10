// build your `/api/projects` router here
const express = require("express");
const funTown = require("./model");
const router = express.Router();
router.post("/resources", (req, res, next) => {
  next();
});
router.get("/resources", async (req, res, next) => {
  try {
    const data = await funTown.getResources();
    res.status(200).json({ message: "gg" });
  } catch {
    next();
  }
});
router.post("/projects", (req, res, next) => {
  next();
});
router.get("/projects", (req, res, next) => {
  next();
});
router.post("/tasks", (req, res, next) => {
  next();
});
router.get("/tasks", (req, res, next) => {
  next();
});

module.exports = router;
