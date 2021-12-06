const Mongoose = require("mongoose");
require("dotenv").config();

const db = Mongoose.connection;

db.once("open", () => {
  console.log("MongoDB connection was successfully.");
});

const connectDB = () => {
  Mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const sequelize = require("../loaders/postgreDB");

sequelize.sequelize.sync();

module.exports = {
  connectDB,
  sequelize,
};
