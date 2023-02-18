const mongoose = require("mongoose");

const optionalSchema = mongoose.Schema({
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour"
  },
  title: String,
  price: Number
});

const Optional = mongoose.model("Optional", optionalSchema);

module.exports = Optional;
