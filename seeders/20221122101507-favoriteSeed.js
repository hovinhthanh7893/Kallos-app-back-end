"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "favorites",
      [
        {
          userId: 1,
          servicerId: 2,
        },
        {
          userId: 1,
          servicerId: 4,
        },
        {
          userId: 1,
          servicerId: 8,
        },
        {
          userId: 3,
          servicerId: 6,
        },
        {
          userId: 5,
          servicerId: 2,
        },
        {
          userId: 5,
          servicerId: 10,
        },
        {
          userId: 5,
          servicerId: 2,
        },
        {
          userId: 7,
          servicerId: 4,
        },
        {
          userId: 7,
          servicerId: 8,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("favorites", null, {});
  },
};
