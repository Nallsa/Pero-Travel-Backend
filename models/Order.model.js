const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  tour: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Tour",
  },
  total: {
    type: String,
    required: true,
  },
  сompletionTime: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
