var express = require("express");
var router = express.Router();
const clientesController = require("../controllers/clientes-controller.js");

/* GET users listing. */
router.get("/", clientesController.findAll);
router.get("/:id", clientesController.findByPk);
router.get("/nombre/:name", clientesController.findByName);

module.exports = router;
