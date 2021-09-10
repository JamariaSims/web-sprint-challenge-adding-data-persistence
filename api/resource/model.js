// build your `Resource` model here
const db = require("../../data/dbConfig");
exports.getResources = async () => {
  const results = await db("resources").first();
  return results;
};
