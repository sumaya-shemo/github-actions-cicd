const Product = require("../models/product.model");

exports.getAllProducts = (req, res) => {
  const products = Product.findAll(req.query.category);
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = Product.findById(req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};
