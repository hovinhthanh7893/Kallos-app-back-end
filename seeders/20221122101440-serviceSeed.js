"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          area: "Amsterdam",
          star: 3,
          styling: true,
          stylingPrice: 50,
          extension: true,
          extensionPrice: 100,
          repairing: true,
          repairingPrice: 100,
          userId: 2,
        },
        {
          area: "Utrecht",
          star: 4.5,
          styling: true,
          stylingPrice: 50,
          extension: false,
          repairing: true,
          repairingPrice: 80,
          userId: 4,
        },
        {
          area: "Amsterdam",
          star: 3.7,
          styling: true,
          stylingPrice: 60,
          extension: false,
          repairing: false,
          userId: 6,
        },
        {
          area: "Rotterdam",
          star: 4,
          styling: true,
          stylingPrice: 55,
          extension: true,
          extensionPrice: 120,
          repairing: false,
          userId: 8,
        },
        {
          area: "Amsterdam",
          star: 3.5,
          styling: true,
          stylingPrice: 40,
          extension: true,
          extensionPrice: 80,
          repairing: true,
          repairingPrice: 80,
          userId: 10,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("services", null, {});
  },
};
