const Tasks = [
  {
    task_description: "When, at last, I ceased to be myself, I came to be",
    task_notes: "Obtained My Dreams",
    task_completed: false,
  },
];
const Resources = [
  {
    resource_name: "Lambda School",
    resource_description: "Best school ever!!",
  },
];
const Projects = [
  {
    project_name: "Portfolio",
    project_description:
      "Website created by yours truly need some updating though.",
    project_completed: true,
  },
  {
    project_name: "Updated Portfolio",
    project_description: "Haven't got around to that yet...",
    project_completed: false,
  },
];
exports.seed = async function (knex) {
  await knex("projects").truncate();
  await knex("tasks").truncate();
  await knex("resources").truncate();
  await knex("projects").insert(Projects);
  await knex("tasks").insert(Tasks);
  await knex("resources").insert(Resources);
};
