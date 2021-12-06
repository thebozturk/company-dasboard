const httpStatus = require("http-status");
const { find, insert } = require("../services/FactoriesList");

const create = async (req, res) => {
  try {
    res.send(await insert(req.body));
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const findAll = async (req, res) => {
  try {
    res.send(await find());
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

module.exports = { create, findAll };
