const Customer = require("../../models/Customer.js");

const postAddToCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const cart = req.body;
    const customer = await Customer.findByIdAndUpdate(userId);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Some Error" });
  }
};
module.exports = postAddToCart;
