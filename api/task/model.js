// build your `Task` model here
const db = require("../../data/dbConfig");
exports.getTasks = async () => {
  const data = await db("tasks").join(
    "projects",
    "projects.project_id",
    "=",
    "tasks.task_id"
  );

  return data.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed ? true : false,
    };
  });
};
