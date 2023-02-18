const { Router } = require("express");

const router = Router();

router.use(require("./users.route"));
router.use(require("./optionals.route"));
router.use(require("./tours.route"));
router.use(require("./reviews.route"));
router.use(require("./bookings.route"));
router.use(require("./claims.route"));
router.use(require("./orders.route"));

module.exports = router;
