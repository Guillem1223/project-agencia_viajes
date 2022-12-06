const { hoteles } = require("../models/index");

const hotelesController = {};

hotelesController.findAll = (req, res) => {
  /* GET users listing. */
  hoteles.findAll().then((data) => {
    res.send(data);
  });

  // res.send("respond with a resource");
};

hotelesController.findByPk = (req, res) => {
  const id = req.params.id;
  hoteles.findByPk(id).then((data) => {
    res.send(data);
  });
};
module.exports = hotelesController;
