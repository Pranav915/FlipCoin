const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const sellerSchema = new Schema({
  sellerName: {
    type: String,
    unique: true,
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
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = model("Seller", sellerSchema);
