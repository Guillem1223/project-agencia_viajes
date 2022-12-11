"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("hoteles", [
      {
        nombre_hotel: "Mandarin",
        importe_noche: 130,
      },
      {
        nombre_hotel: "Palauet",
        importe_noche: 1120,
      },
      {
        nombre_hotel: "Sagrada Familia",
        importe_noche: 80,
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
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
