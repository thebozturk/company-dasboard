const httpStatus = require("http-status");
const passwordToHash = require("../scripts/helper");
const insert = require("../services/User");

const create = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = { create };
