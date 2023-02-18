const Booking = require("../models/Booking.model");
const Order = require("../models/Order.model");
const Tour = require("../models/Tour.model");

module.exports.bookingsController = {
  getBooking: async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.json(bookings);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  getIdBooking: async (req, res) => {
    try {
      const booking = await Booking.find({ user: req.user.id });
      res.json(booking);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  addBooking: async (req, res) => {
    try {
      const { tour, day, people, timeInformation, total } = req.body;
      const booking = await Booking.create({
        user: req.user.id,
        tour,
        day,
        people,
        timeInformation,
        total,
      });
      const tours = await Tour.findById(booking.tour);
      const recalculation = tours.tickets - booking.people;
      await tours.update({
        tickets: recalculation,
      });
      await tours.update({
        $push: {
          days: req.body.day,
        },
      });
      await Order.create({
        user: req.user.id,
        tour: tours._id,
        total: booking.total,
        сompletionTime: timeInformation,
      });
      res.json("Забронировано");
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  removeDayFromBooking: async (req, res) => {
    try {
      const booking = await Booking.findOne({ _id: req.params.bookingsId });
      console.log(booking);
      res.json(booking);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  deleteBooking: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.bookingsId);
      const tour = await Tour.findById(booking.tour.toString());
      const recalculation = tour.tickets + booking.people;
      await tour.update({
        tickets: recalculation,
      });
      await tour.update({
        days: tour.days.filter((day) => day != booking.day),
      });
      await Booking.findByIdAndDelete(req.params.bookingsId);
      res.json(booking);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  clearArchive: async (req, res) => {
    try {
      const json = await Booking.findByIdAndDelete(req.params.bookingsId);
      res.json(json);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
};
