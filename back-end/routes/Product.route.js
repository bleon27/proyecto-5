const express = require("express");

const router = express.Router();

const { getProducts, getProduct } = require("../controllers/Product.controller");

router.get("/tipo/:tipo", getProducts);
router.get("/:id", getProduct);

module.exports = router;