// build your `Task` model here
const db = require("../../data/dbConfig");
exports.getTasks = () => {
  return db("tasks").join("projects", "projects_id", "=", "projects_id");
};
