"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/portrait-beautiful-brunette-woman-long-600w-1927331597.jpg",
          description: "styling",
          userId: 2,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/brunette-hair-woman-beauty-hairstyle-600w-1554488075.jpg",
          description: "styling",
          userId: 2,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/redhead-girl-long-healthy-shiny-600w-1144692035.jpg",
          description: "extension",
          userId: 2,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/beautiful-hair-portrait-young-girl-600w-180663413.jpg",
          description: "extension",
          userId: 2,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/beautiful-woman-hair-long-brunette-600w-1403150687.jpg",
          description: "repairing",
          userId: 2,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/portrait-natural-sensual-woman-long-600w-1310976089.jpg",
          description: "repairing",
          userId: 4,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/beautiful-long-hair-brunette-woman-600w-1181660344.jpg",
          description: "styling",
          userId: 6,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/closeup-portrait-beautiful-young-woman-600w-321044957.jpg",
          description: "styling",
          userId: 6,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/brunette-girl-healthy-curly-hair-600w-1433361467.jpg",
          description: "styling",
          userId: 10,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/woman-cosmetic-closeup-beauty-portrait-600w-663617554.jpg",
          description: "styling",
          userId: 10,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/portrait-redhaired-beautiful-young-woman-600w-1784223845.jpg",
          description: "extension",
          userId: 10,
        },
        {
          imageUrl:
            "https://www.shutterstock.com/image-photo/brunette-girl-long-volume-shiny-600w-588815873.jpg",
          description: "extension",
          userId: 10,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
