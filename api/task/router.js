// build your `/api/tasks` router here
const express = require("express");
const taskFunctions = require("./model");
const router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    const { project_id } = req.body;
    if (!project_id) {
      next();
    } else {
      const data = await taskFunctions.addTask(req.body);
      res.status(201).json(data);
    }
  } catch (err) {
    next(err);
  }
});
router.get("/", async (req, res, next) => {
  const data = await taskFunctions.getTasks();
  res.status(200).json(data);
});
module.exports = router;
