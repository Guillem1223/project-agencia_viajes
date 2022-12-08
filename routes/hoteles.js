var express = require("express");
var router = express.Router();
const hotelesController = require("../controllers/hoteles-controller");

/* GET users listing. */
router.get("/", hotelesController.findAll);
router.get("/:id", hotelesController.findByPk);
// router.get("/nombre_hotel/:nameHotel", hotelesController.findByHotelName);

module.exports = router;
