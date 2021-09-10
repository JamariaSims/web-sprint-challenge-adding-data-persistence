// build your `Resource` model here
const db = require("../../data/dbConfig");
exports.getResources = async () => {
  const results = await db("resources");
  return results;
};
exports.getResource = async (id) => {
  return await db("resources").where({ id }).first();
};
exports.addResources = async (req) => {
  const results = await db("resources").insert(req.params.id);
  return getResource(id);
};
