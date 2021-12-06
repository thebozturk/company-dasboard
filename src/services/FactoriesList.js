const db = require("../loaders/postgreDB");

const insert = async (data) => {
  return await db.factoriesList.create(data);
};

const find = async () => {
  return await db.factoriesList.findAll();
};

module.exports = { insert, find };
