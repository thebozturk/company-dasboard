const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "editor"],
    required: true,
  },
});

module.exports = Mongoose.model("user", UserSchema);
