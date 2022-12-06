var express = require("express");
var router = express.Router();
const reservasController = require("../controllers/reservas-controller");

/* GET users listing. */
router.get("/", reservasController.findAll);
router.get("/:id", reservasController.findByPk);

module.exports = router;
