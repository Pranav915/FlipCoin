const Seller = require("../../../models/Seller");

const editLoyaltyProgram = async (req, res) => {
  try {
    const { op } = req.body;
    const sellerId = req.user;
    const seller = Seller.findByIdAndUpdate(sellerId, {
      availedLoyaltyProgram: op,
    });

    res.status(201).json({ error: false });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Some Error" });
  }
};

module.exports = editLoyaltyProgram;
