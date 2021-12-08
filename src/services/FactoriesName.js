const db = require("../loaders/postgreDB");

const insert = async (data) => {
  return await db.factoriesName.create(data);
};

const find = async () => {
  return await db.factoriesName.findAll();
};
const modify = async (data, id) => {
  return await db.factoriesName.update(data, { where: { id: id } });
};
const deleteById = async (id) => {
  return db.factoriesName.destroy({ where: { id: id } });
};

module.exports = { insert, find, modify, deleteById };
