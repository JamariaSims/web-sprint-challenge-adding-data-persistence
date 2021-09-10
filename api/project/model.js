// build your `Project` model here
const db = require("../../data/dbConfig");
exports.getProjects = async () => {
  const response = await db("projects");
  return response.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed ? true : false,
    };
  });
};
exports.getProject = async (project_id) => {
  const response = await db("projects").where({ project_id });
  return response.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed ? true : false,
    };
  });
};
exports.postProject = async (project) => {
  await db("projects").insert(project);
};
