const Order = require("../models/Order.model");

module.exports.ordersControllers = {
  getOrders: async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user.id });
      res.json(orders);
    } catch (error) {
      res.status(401).json("Ошибка " + error.toString());
    }
  },
  //   addOrder: async (req, res) => {
  //     try {
  //       const { user, tour, booking, сompletionTime } = req.body;
  //       const order = await Order.create({
  //         user,
  //         tour,
  //         booking,
  //         сompletionTime,
  //       });
  //       res.json(order);
  //     } catch (error) {
  //       res.status(401).json("Ошибка " + error.toString());
  //     }
  //   },
};
