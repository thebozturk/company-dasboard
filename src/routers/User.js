const express = require("express");
const { create, login, getUser, update } = require("../controllers/User");
const schemas = require("../validations/User");
const validate = require("../middlewares/validate");
const authenticateToken = require("../middlewares/authenticate");

const router = express.Router();

router.route("/").post(validate(schemas.createValidation), create);
router.route("/login").post(validate(schemas.loginValidation), login);
router.route("/me").get(authenticateToken, getUser);
router
  .route("/")
  .patch(authenticateToken, validate(schemas.updateValidation), update);

module.exports = router;
