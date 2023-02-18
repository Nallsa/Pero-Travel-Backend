const { Router } = require("express");
const { optionalsController } = require("../controllers/optionals.controller");

const router = Router();

router.post("/admin/optionals", optionalsController.addOptional);
router.get("/optionals", optionalsController.getOptionals);
router.delete("/optionals/:optionalsId", optionalsController.deleteOptional);
router.patch("/optionals/:optionalsId", optionalsController.changeOptional);

module.exports = router;
