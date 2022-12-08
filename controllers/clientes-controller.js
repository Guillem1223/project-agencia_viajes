const { Clientes } = require("../models/index");

const clientesController = {};

clientesController.findAll = (req, res) => {
  /* GET users listing. */
  Clientes.findAll().then((data) => {
    res.send(data);
  });

  // res.send("respond with a resource");
};

clientesController.findByPk = (req, res) => {
  const id = req.params.id;
  Clientes.findByPk(id).then((data) => {
    res.send(data);
  });
};
module.exports = clientesController;
