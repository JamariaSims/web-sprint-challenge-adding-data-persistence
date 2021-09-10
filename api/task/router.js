// build your `/api/tasks` router here
const express = require("express");
const taskFunctions = require("./model");
const router = express.Router();
router.post("/", async (req, res, next) => {
  next();
});
router.get("/", async (req, res, next) => {
  const data = await taskFunctions.getTasks();
  res.status(200).json(data);
});
module.exports = router;
