const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const customerSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  cart: {
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
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

module.exports = model("Customer", customerSchema);
