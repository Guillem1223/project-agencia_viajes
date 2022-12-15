const { Reservas, Clientes, Hoteles } = require("../models.js");
const { Op } = require("sequelize");
const reservasController = {};

/* GET users listing. */
reservasController.findAll = async (req, res) => {
  try {
    const data = await Reservas.findAll({
      include: [
        {
          model: Hoteles,
          as: "id_hotel_hotele",
        },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
    });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "some error ocurred while retrieving reservas.",
    });
  }
};

reservasController.findByPk = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Reservas.findByPk(id, {
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with id = ${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with id = ${id}`,
    });
  }
};

reservasController.findByDateStart = async (req, res) => {
  const dateStart = req.params.dateStart;
  try {
    const data = await Reservas.findAll({
      where: { fecha_entrada: { [Op.like]: `%${dateStart}%` } },
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
    });
    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${dateStart}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${dateStart}`,
    });
  }
};

reservasController.findByDateEnd = async (req, res) => {
  const dateEnd = req.params.dateEnd;
  try {
    const data = await Reservas.findAll({
      where: { fecha_salida: { [Op.like]: `%${dateEnd}%` } },
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
    });
    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${dateEnd}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${dateEnd}`,
    });
  }
};
module.exports = reservasController;
