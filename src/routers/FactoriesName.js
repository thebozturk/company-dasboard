const express = require("express");
const { create, findAll } = require("../controllers/FactoriesName");

const router = express.Router();

router.route("/").get(findAll);
router.route("/").post(create);

module.exports = router;
