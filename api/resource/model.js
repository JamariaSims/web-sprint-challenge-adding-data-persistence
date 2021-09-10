// build your `Resource` model here
const db = require("../../data/dbConfig");
exports.getResources = async () => {
  const results = await db("resources");
  return results;
};
exports.getResource = async (resources_id) => {
  const data = await db("resources").where({ resources_id }).first();
  return data;
};
exports.addResources = async (req, res, next) => {
  const data = await db("resources").insert(req.body);
  data.then((response) => {
    return response;
  });
};
