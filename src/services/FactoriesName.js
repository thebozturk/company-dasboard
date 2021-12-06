const db = require("../loaders/postgreDB");

const insert = async (data) => {
  return await db.factoriesName.create(data);
};

const find = async () => {
  return await db.factoriesName.findAll();
};

module.exports = { insert, find };
