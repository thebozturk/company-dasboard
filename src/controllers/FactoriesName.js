const httpStatus = require("http-status");
const {
  find,
  insert,
  modify,
  deleteById,
} = require("../services/FactoriesName");

const create = async (req, res) => {
  try {
    res.send(await insert(req.body));
  } catch (error) {
    console.log(error);

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

const update = (req, res) => {
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "Id information is missing",
    });
  }
  modify(req.body, req.params.id)
    .then((updatedFactoriesName) => {
      res.status(httpStatus.OK).send(updatedFactoriesName);
    })
    .catch((e) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "There was a problem during updating" })
    );
};

const deleteInfo = (req, res) => {
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "Id information is missing",
    });
  }
  deleteById(req.params.id)
    .then(() => {
      res.status(httpStatus.OK).send("Deleted successfully");
    })
    .catch((e) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "There was a problem during deleting" })
    );
};
module.exports = { create, findAll, update, deleteInfo };
