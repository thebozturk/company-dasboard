const express = require("express");
const schemas = require("../validations/FactoriesList");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const { create, findAll } = require("../controllers/FactoriesList");

const router = express.Router();

router.route("/").get(authenticate, findAll);
router.route("/").post(validate(schemas.createValidation), create);

module.exports = router;
