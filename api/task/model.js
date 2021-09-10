// build your `Task` model here
const db = require("../../data/dbConfig");
exports.getTasks = () => {
  return db("tasks");
};
