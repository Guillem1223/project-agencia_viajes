var express = require("express");
var router = express.Router();
const clientesController = require("../controllers/clientes-controller.js");

/* GET users listing. */
router.get("/", clientesController.findAll);
router.get("/:id", clientesController.findByPk);
router.get("/nombre/:name", clientesController.findByName);
router.get("/apellido/:lastName", clientesController.findByLastName);
router.get("/email/:correo", clientesController.findByEmail);
router.get("/dni/:dni", clientesController.findByDni);
router.get("/telefono/:phone", clientesController.findByTlf);
module.exports = router;
