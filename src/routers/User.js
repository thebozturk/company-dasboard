const express = require("express");
const { create, login } = require("../controllers/User");
const schemas = require("../validations/User");
const validate = require("../middlewares/validate");

const router = express.Router();

router.route("/").post(validate(schemas.createValidation), create);
router.route("/login").post(validate(schemas.loginValidation), login);

module.exports = router;
