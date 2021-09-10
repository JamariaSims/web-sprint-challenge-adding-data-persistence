// build your `Resource` model here
const db = require("../../data/dbConfig");

exports.getResources = async () => {
  const data = await db("resources");
  return data;
};

exports.getResource = async (resource_id) => {
  const data = await db("resources").where({ resource_id }).first();
  return data;
};

exports.addResources = async (addme) => {
  const id = await db("resources").insert(addme);
  return this.getResource(id);
};
