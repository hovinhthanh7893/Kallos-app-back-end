"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "services",
      [
        {
          area: "Amsterdam",
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
          styling: true,
          stylingPrice: 50,
          extension: false,
          repairing: true,
          repairingPrice: 80,
          userId: 4,
        },
        {
          area: "Amsterdam",
          styling: true,
          stylingPrice: 60,
          extension: false,
          repairing: false,
          userId: 6,
        },
        {
          area: "Rotterdam",
          styling: true,
          stylingPrice: 55,
          extension: true,
          extensionPrice: 120,
          repairing: false,
          userId: 8,
        },
        {
          area: "Amsterdam",
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
