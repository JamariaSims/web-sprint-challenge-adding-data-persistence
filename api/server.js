const express = require("express");
const { logger } = require("./middleware");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());
server.use("/api/projects", logger, projectRouter);
server.use("/api/resources", logger, resourceRouter);
server.use("/api/tasks", logger, taskRouter);

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
