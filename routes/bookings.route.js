const { Router } = require("express");
const { bookingsController } = require("../controllers/bookings.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/bookings", authMiddleware, bookingsController.getBooking);
router.get("/bookings/user", authMiddleware, bookingsController.getIdBooking);
router.post("/bookings", authMiddleware, bookingsController.addBooking);
router.get("/admin/bookings", bookingsController.getBooking);
router.post("/bookings", authMiddleware, bookingsController.addBooking);
router.delete(
  "/bookings/:bookingsId",
  authMiddleware,
  bookingsController.removeDayFromBooking
);
router.delete("/bookings/delete/:bookingsId", bookingsController.deleteBooking);
router.delete("/bookings/archive/:bookingsId", bookingsController.clearArchive);

module.exports = router;
