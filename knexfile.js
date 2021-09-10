// do not make changes to this file
const sharedConfig = {
  typeCast: function (field, next) {
    if (field.type == "TINY" && field.length == 1) {
      return field.string() == "1"; // 1 = true, 0 = false
    }
    return next();
  },

  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/lambda.db3" },
    seeds: { directory: "./data/seeds" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./data/test.db3" },
  },
};
