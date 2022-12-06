var express = require("express");
var router = express.Router();
const clientesController = require("../controllers/clientes-controller.js");

/* GET users listing. */
router.get("/", clientesController.findAll);
router.get("/:id", clientesController.findByPk);

module.exports = router;
