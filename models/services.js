"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      services.belongsTo(models.users, { foreignKey: "userId" });
      services.belongsToMany(models.users, {
        through: "favorites",
        foreignKey: "servicerId",
      });
    }
  }
  services.init(
    {
      area: DataTypes.STRING,
      star: DataTypes.FLOAT,
      styling: DataTypes.BOOLEAN,
      stylingPrice: DataTypes.INTEGER,
      extension: DataTypes.BOOLEAN,
      extensionPrice: DataTypes.INTEGER,
      repairing: DataTypes.BOOLEAN,
      repairingPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "services",
    }
  );
  return services;
};
