const express = require("express");
const productRoutes = require("./product.routes");

const router = express.Router();

router.get("/hello", (req, res) => {
  const name = req.query.name || "world";
  res.json({ message: `Hello, ${name}!` });
});

router.use("/products", productRoutes);

module.exports = router;
