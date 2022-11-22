"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("services", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      area: {
        type: Sequelize.STRING,
      },
      styling: {
        type: Sequelize.BOOLEAN,
      },
      stylingPrice: {
        type: Sequelize.INTEGER,
      },
      extension: {
        type: Sequelize.BOOLEAN,
      },
      extensionPrice: {
        type: Sequelize.INTEGER,
      },
      repairing: {
        type: Sequelize.BOOLEAN,
      },
      repairingPrice: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("services");
  },
};
