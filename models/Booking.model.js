const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tour",
    required: true,
  },
  timeInformation: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  people: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
