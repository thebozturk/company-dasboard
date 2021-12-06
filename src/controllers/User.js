const httpStatus = require("http-status");
const {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/helper");
const { insert, loginUser } = require("../services/User");

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

const login = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  loginUser(req.body)
    .then((user) => {
      if (!user)
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "User not found." });
      user = {
        ...user.toObject(),
        tokens: {
          access_token: generateAccessToken(user),
          refresh_roken: generateRefreshToken(user),
        },
      };
      delete user.password;
      res.status(httpStatus.OK).send(user);
    })
    .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

const getUser = (req, res) => {
  res.json(req.user);
};

module.exports = { create, login, getUser };
