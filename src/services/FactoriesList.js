const db = require("../loaders/postgreDB");

const insert = async (data) => {
  return await db.factoriesList.create(data);
};

const find = async () => {
  return await db.factoriesList.findAll();
};

const modify = async (data, id) => {
  return await db.factoriesList.update(data, { where: { id: id } });
};
const deleteById = async (id) => {
  return db.factoriesList.destroy({ where: { id: id } });
};

module.exports = { insert, find, modify, deleteById };
