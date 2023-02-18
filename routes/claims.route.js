const { Router } = require("express");
const { claimsController } = require("../controllers/claims.controller");

const router = Router();

router.post("/claims", claimsController.addClaims);

module.exports = router;
