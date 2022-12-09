"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      favorites.belongsTo(models.users);
      favorites.belongsTo(models.services);
    }
  }
  favorites.init(
    {
      userId: DataTypes.INTEGER,
      servicerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favorites",
    }
  );
  return favorites;
};
