const User = require("../models/User");

const insert = (data) => {
  const user = new User(data);
  return user.save();
};

const loginUser = (loginData) => {
  return User.findOne(loginData);
};

const modify = (where, data) => {
  return User.findOneAndUpdate(where, data, { new: true });
};

module.exports = { insert, loginUser, modify };
