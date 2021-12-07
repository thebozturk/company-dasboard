const express = require("express");
const schemas = require("../validations/FactoriesName");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const { create, findAll } = require("../controllers/FactoriesName");

const router = express.Router();

router.route("/").get(authenticate, findAll);
router.route("/").post(validate(schemas.createValidation), create);

module.exports = router;
