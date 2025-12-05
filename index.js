const express = require("express");
const app = express();
const products = require("./products/index.json");

app.use(express.json());

app.get("/product/random", (req, res) => {
  const random = products[Math.floor(Math.random() * products.length)];
  res.json(random);
});

app.get("/products/ten", (req, res) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, 10));
});

app.get("/products/random/:count", (req, res) => {
  const count = parseInt(req.params.count);
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, count));
});

app.get("/categories", (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json(categories);
});

app.get("/products/:category", (req, res) => {
  const categoryProducts = products.filter(
    p => p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(categoryProducts);
});

app.get("/product/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  product ? res.json(product) : res.json({ error: "Product not found" });
});

app.listen(3000, () => {
  console.log("Fake Product API running on port 3000");
});
