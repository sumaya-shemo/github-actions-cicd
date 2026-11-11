const express = require("express");
const controller = require("../controllers/product.controller");

const router = express.Router();

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById);

module.exports = router;
