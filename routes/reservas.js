var express = require("express");
var router = express.Router();
const reservasController = require("../controllers/reservas-controller");

/* GET users listing. */
router.get("/", reservasController.findAll);
router.get("/:id", reservasController.findByPk);
router.get("/fecha_entrada/:dateStart", reservasController.findByDateStart);
router.get("/fecha_salida/:dateEnd", reservasController.findByDateEnd);
module.exports = router;
