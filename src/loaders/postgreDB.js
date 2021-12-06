const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_ADMIN,
  process.env.DB_PASSWORD,
  {
    dialect: "sqlite",
    storage: "./db.sqlite",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.factoriesList = require("../models/postgres/FactoriesList")(
  sequelize,
  Sequelize
);

db.factoriesName = require("../models/postgres/FactoriesName")(
  sequelize,
  Sequelize
);

module.exports = db;
