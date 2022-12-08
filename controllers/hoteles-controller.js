const { Hoteles, Reservas } = require("../models.js");
const { Op } = require("sequelize");
const hotelesController = {};

/* GET users listing. */
hotelesController.findAll = async (req, res) => {
  try {
    const data = await Hoteles.findAll({
      include: { model: Reservas, as: "reservas" },
    });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "some error ocurred while retrieving hoteles.",
    });
  }
};

hotelesController.findByPk = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Hoteles.findByPk(id, {
      include: { model: Reservas, as: "reservas" },
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

hotelesController.findByHotelName = async (req, res) => {
  const nameHotel = req.params.nameHotel;
  try {
    const data = await Hoteles.findAll({
      where: { nombre_hotel: { [Op.like]: `%${nameHotel}%` } },
      include: [{ model: Reservas, as: "reservas" }],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${nameHotel}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${nameHotel}`,
    });
  }
};

module.exports = hotelesController;
