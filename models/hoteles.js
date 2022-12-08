const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Hoteles.init(sequelize, DataTypes);
}

class Hoteles extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_hotel: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    importe_noche: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hoteles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
