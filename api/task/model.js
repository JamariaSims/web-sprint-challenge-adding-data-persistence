// build your `Task` model here
const db = require("../../data/dbConfig");
exports.getTasks = async () => {
  const data = await db("tasks")
    .join("projects", "tasks.project_id", "projects.project_id")
    .select("tasks.*", "projects.project_name", "projects.project_description");

  return data.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed ? true : false,
    };
  });
};
exports.getTask = async (project_id) => {
  const data = await db("tasks")
    .where("project_id", project_id)
    .select("task_description", "task_notes", "task_completed")
    .first();
  return {
    ...data,
    task_completed: data.task_completed ? true : false,
  };
};
exports.addTask = async (addme) => {
  const { project_id } = addme;
  const id = await db("tasks").where("project_id", project_id).insert(addme);
  return this.getTask(id);
};
