"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("clientes", [
      {
        nombre: "Andres",
        apellido: "Feliz",
        email: "afeliz@gmail.com",
        telefono: 628965478,
        dni: "45896251K",
      },
      {
        nombre: "Joel",
        apellido: "Parra",
        email: "jparra@gmail.com",
        telefono: 650248957,
        dni: "47278954J",
      },
      {
        nombre: "Ante",
        apellido: "Tomic",
        email: "atomic@gmail.com",
        telefono: 689578296,
        dni: "42365146H",
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
    await queryInterface.bulkDelete("clientes", [
      {
        nombre: "Andres",
        apellido: "Feliz",
        email: "afeliz@gmail.com",
        telefono: 628965478,
        dni: "45896251K",
      },
      {
        nombre: "Joel",
        apellido: "Parra",
        email: "jparra@gmail.com",
        telefono: 650248957,
        dni: "47278954J",
      },
      {
        nombre: "Ante",
        apellido: "Tomic",
        email: "atomic@gmail.com",
        telefono: 689578296,
        dni: "42365146H",
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
