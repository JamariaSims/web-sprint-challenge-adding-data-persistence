// build your `/api/resources` router here
const express = require("express");
const resourcesFunctions = require("./model");
const router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    const data = await resourcesFunctions.addResources(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
});
router.get("/", async (req, res, next) => {
  const data = await resourcesFunctions.getResources();
  res.status(200).json(data);
});
router.get("/:id", async (req, res, next) => {
  const data = await resourcesFunctions.getResource(req.params.id);
  res.status(200).json(data);
});
module.exports = router;
