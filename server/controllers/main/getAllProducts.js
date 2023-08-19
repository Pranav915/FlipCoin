const Product = require("../../models/Product.js");

const getAllProducts = async (req, res) => {
  console.log("getall products");
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Some Error" });
  }
};
module.exports = getAllProducts;
