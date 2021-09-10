// build your `/api/projects` router here
const express = require("express");
const router = express.Router();

router.post("/resources", (req, res, next) => {
  next();
});
router.get("/resources", (req, res, next) => {
  next();
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
