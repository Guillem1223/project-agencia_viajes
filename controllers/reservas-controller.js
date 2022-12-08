const { Reservas } = require("../models/index");

const reservasController = {};

reservasController.findAll = (req, res) => {
  /* GET users listing. */
  Reservas.findAll().then((data) => {
    res.send(data);
  });

  // res.send("respond with a resource");
};

reservasController.findByPk = (req, res) => {
  const id = req.params.id;
  Reservas.findByPk(id).then((data) => {
    res.send(data);
  });
};
module.exports = reservasController;
