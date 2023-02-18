const { Router } = require("express");
const { toursController } = require("../controllers/tours.controller");
const addFilleMiddleware = require("../middlewares/addFille.middleware");
const addGalleryMiddleware = require("../middlewares/addGallery.middleware");
const addTourMiddleware = require("../middlewares/addTour.middleware");

const router = Router();

router.get("/tours", toursController.fetchTours);
router.post(
  "/admin/tours",
  addTourMiddleware.single("bgImage"),
  toursController.addTour
);
router.delete("/admin/tours/:toursId", toursController.deleteTour);
router.patch(
  "/admin/tours/:toursId",
  addTourMiddleware.single("bgImage"),
  toursController.changeTour
);
router.patch(
  "/admin/tours/gallery/:toursId",
  addGalleryMiddleware.array("gallery"),
  toursController.changeTourGallery
);
// router.patch('/admin/tours/image/:toursId', toursController.addAPhotoToTheTour)

module.exports = router;
