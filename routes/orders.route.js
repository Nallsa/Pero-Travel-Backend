const { Router } = require("express");
const { ordersControllers } = require("../controllers/orders.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/orders", authMiddleware, ordersControllers.getOrders);
// router.post("/orders", authMiddleware, ordersControllers.addOrder);

module.exports = router;
