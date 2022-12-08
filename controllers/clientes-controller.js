const { Clientes, Reservas } = require("../models.js");
const { Op } = require("sequelize");
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

clientesController.findByPk = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Clientes.findByPk(id, {
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

clientesController.findByName = async (req, res) => {
  const name = req.params.name;
  try {
    const data = await Clientes.findAll({
      where: { nombre: { [Op.like]: `%${name}%` } },
      include: [{ model: Reservas, as: "reservas" }],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${name}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${name}`,
    });
  }
};

clientesController.findByLastName = async (req, res) => {
  const lastName = req.params.lastName;
  try {
    const data = await Clientes.findAll({
      where: { apellido: { [Op.like]: `%${lastName}%` } },
      include: [{ model: Reservas, as: "reservas" }],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${lastName}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${lastName}`,
    });
  }
};

clientesController.findByEmail = async (req, res) => {
  const correo = req.params.correo;
  try {
    const data = await Clientes.findAll({
      where: { email: { [Op.like]: `%${correo}%` } },
      include: [{ model: Reservas, as: "reservas" }],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${correo}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${correo}`,
    });
  }
};

clientesController.findByDni = async (req, res) => {
  const dni = req.params.dni;
  try {
    const data = await Clientes.findAll({
      where: { dni: { [Op.like]: `%${dni}%` } },
      include: [{ model: Reservas, as: "reservas" }],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${dni}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${dni}`,
    });
  }
};

clientesController.findByTlf = async (req, res) => {
  const phone = req.params.phone;
  try {
    const data = await Clientes.findAll({
      where: { telefono: { [Op.like]: `%${phone}%` } },
      include: [{ model: Reservas, as: "reservas" }],
    });
    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name = ${phone}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retreiving with name = ${phone}`,
    });
  }
};
module.exports = clientesController;
