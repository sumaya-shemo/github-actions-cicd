const fs = require("fs");
const path = require("path");

// Load seed data from the JSON file in this folder once at startup
const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "products.seed.json"), "utf8")
);

const Product = {
  findAll(category) {
    return category ? products.filter((p) => p.category === category) : products;
  },

  findById(id) {
    return products.find((p) => p.id === Number(id));
  },
};

module.exports = Product;
