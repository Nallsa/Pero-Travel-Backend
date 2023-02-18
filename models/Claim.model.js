const mongoose = require("mongoose");

const claimSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;
