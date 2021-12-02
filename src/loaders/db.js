const Mongoose = require("mongoose");
require("dotenv").config();

const db = Mongoose.connection;

db.once("open", () => {
  console.log("Database connection was successfully.");
});

const connectDB = async () => {
  await Mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
};
