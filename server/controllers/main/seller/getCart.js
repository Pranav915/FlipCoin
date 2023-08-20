const Customer = require("../../../models/Customer");
const Product = require("../../../models/Product");

const getCart = async (req, res) => {
  try {
    const customerId = req.user.userId;
    console.log("id", customerId);
    const customer = await Customer.findById(customerId);
    if (!customer) {
      res.status(404).json({ error: "true", msg: "User Not Found" });
    }
    console.log(customer.cart);
    const response = [];
    customer.cart.forEach((element) => {
      element?.products.forEach((product) => {
        const productDetails = Product.findById(product.productId);
        response.push({
          sellerId: element.sellerId,
          productId: productDetails._id,
          name: productDetails.name,
          price: productDetails.price,
          imgUrl: productDetails.imgUrl,
        });
      });
    });
    return res.status(200).json({ error: false, response });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Some Error" });
  }
};

module.exports = getCart;
