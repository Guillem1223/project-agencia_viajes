const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Reservas.init(sequelize, DataTypes);
}

class Reservas extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_entrada: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_salida: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_hotel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hoteles',
        key: 'id'
      }
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'reservas',
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
      {
        name: "id_hotel",
        using: "BTREE",
        fields: [
          { name: "id_hotel" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
    ]
  });
  }
}
