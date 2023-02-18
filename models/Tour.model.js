const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  typeTour: {
    type: String,
    required: true,
  },
  bgImage: {
    type: String,
    required: true,
  },
  vcImage: {
    type: String,
    required:true
  },
  place: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  tickets: {
    type: Number,
    required: true,
  },
  price: Number,
  priceForChild: Number,
  days: [],
  duration: Number,
  wayPoints: [],
  gallery: [],
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
