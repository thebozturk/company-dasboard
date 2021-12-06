const express = require("express");
const { create, findAll } = require("../controllers/FactoriesList");

const router = express.Router();

router.route("/").get(findAll);
router.route("/").post(create);

module.exports = router;
