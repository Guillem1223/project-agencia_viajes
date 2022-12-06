var express = require("express");
var router = express.Router();
const hotelesController = require("../controllers/hoteles-controller");

/* GET users listing. */
router.get("/", hotelesController.findAll);
router.get("/:id", hotelesController.findByPk);

module.exports = router;
