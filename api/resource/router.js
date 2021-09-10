// build your `/api/resources` router here
const express = require("express");
const resourcesFunctions = require("./model");
const router = express.Router();
router.post("/", async (req, res, next) => {
  
});
router.get("/", async (req, res, next) => {
  const data = await resourcesFunctions.getResources();
  res.status(200).json(data);
});
module.exports = router;
