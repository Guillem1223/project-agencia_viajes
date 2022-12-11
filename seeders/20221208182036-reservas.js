"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("reservas", [
      {
        fecha_entrada: "2023-02-10",
        fecha_salida: "2023-02-13",
        id_hotel: 4,
        id_cliente: 5,
      },
      {
        fecha_entrada: "2023-03-10",
        fecha_salida: "2023-03-13",
        id_hotel: 5,
        id_cliente: 6,
      },
      {
        fecha_entrada: "2023-02-15",
        fecha_salida: "2023-02-20",
        id_hotel: 6,
        id_cliente: 4,
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("reservas", [
      {
        fecha_entrada: "2023-02-10",
        fecha_salida: "2023-02-13",
        id_hotel: 4,
        id_cliente: 5,
      },
      {
        fecha_entrada: "2023-03-10",
        fecha_salida: "2023-03-13",
        id_hotel: 5,
        id_cliente: 6,
      },
      {
        fecha_entrada: "2023-02-15",
        fecha_salida: "2023-02-20",
        id_hotel: 6,
        id_cliente: 4,
      },
    ]);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
