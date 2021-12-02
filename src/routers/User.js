const express = require("express");
const { create } = require("../controllers/User");
const schemas = require("../validations/User");
const validate = require("../middlewares/validate");

const router = express.Router();

router.route("/").post(validate(schemas.createValidation), create);

module.exports = router;
