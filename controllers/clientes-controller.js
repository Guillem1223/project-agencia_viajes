const { Clientes, Reservas } = require("../models.js");

const clientesController = {};

/* GET users listing. */
clientesController.findAll = async (req, res) => {
  try {
    const data = await Clientes.findAll({
      include: { model: Reservas, as: "reservas" },
    });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "some error ocurred while retrieving users.",
    });
  }
};

clientesController.findByPk = (req, res) => {
  const id = req.params.id;
  Clientes.findByPk(id).then((data) => {
    res.send(data);
  });
};
module.exports = clientesController;
