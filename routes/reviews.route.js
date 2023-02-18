const { Router } = require("express");
const { reviewsController } = require("../controllers/reviews.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/review", reviewsController.getReviews);
router.get("/reviews/tours/:id", reviewsController.getReviewsByTour);
router.post("/reviews/:toursId", authMiddleware, reviewsController.addReview);
router.delete("/reviews/:id", reviewsController.deleteReview);

module.exports = router;
