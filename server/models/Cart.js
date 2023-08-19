const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const cartSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  products: [
    {
      seller: [
        {
          sellerId: {
            type: String,
          },
          products: [
            {
              product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
              },
              productCount: {
                type: String,
              },
            },
          ],
        },
      ],
    },
  ],
});

module.exports = model("Cart", cartSchema);
