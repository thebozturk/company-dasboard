const User = require("../models/User");

const insert = (data) => {
  const user = new User(data);
  return user.save();
};

module.exports = insert;
