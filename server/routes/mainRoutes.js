const express = require("express");
const router = express.Router();
const getAllProducts = require("../controllers/main/getAllProducts");

router.get("/getAllProducts", getAllProducts);
router.get("/getAllProducts");

module.exports = router;
