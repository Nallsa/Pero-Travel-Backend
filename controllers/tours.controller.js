const Tour = require("../models/Tour.model");

module.exports.toursController = {
  fetchTours: async (req, res) => {
    try {
      const tours = await Tour.find();
      res.json(tours);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  addTour: async (req, res) => {
    try {
      const {
        typeTour,
        place,
        title,
        desc,
        price,
        priceForChild,
        duration,
        tickets,
      } = req.body;
      const tour = await Tour.create({
        typeTour,
        bgImage: req.file.path,
        vcImage: req.file.path,
        place,
        title,
        desc,
        price,
        priceForChild,
        duration,
        tickets,
      });
      res.json(tour);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },

  deleteTour: async (req, res) => {
    try {
      const tour = await Tour.findByIdAndDelete(req.params.toursId);
      res.json(tour);
    } catch (e) {
      res.status(401).json({ error: "Ошибка " + e.toString() });
    }
  },

  changeTour: async (req, res) => {
    try {
      const { typeTour, place, title, desc, price, priceForChild, duration } =
        req.body;
      const json = await Tour.findById(req.params.id);
      const bgImage = req.file.path ? req.file.path : json.bgImage;
      await Tour.findByIdAndUpdate(req.params.toursId, {
        ...req.body,
        bgImage,
      });
      const tour = await Tour.findById(req.params.toursId);
      res.json(tour);
    } catch (e) {
      res.status(401).json("Ошибка " + e.toString());
    }
  },

  changeTourGallery: async (req, res) => {
    try {
      await findByIdAndUpdate(req.params.toursId, {
        $push: {
          gallery: req.file.path,
        },
      });
      const tour = await Tour.findById(req.params.toursId);
      res.json(tour);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
};
