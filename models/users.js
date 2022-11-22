"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasOne(models.services);
      users.hasMany(models.images);
      users.belongsToMany(models.users, {
        as: "children",
        foreignKey: "sevicerId",
        through: "favorites",
      });
      users.belongsToMany(models.users, {
        as: "parents",
        foreignKey: "userId",
        through: "favorites",
      });
    }
  }
  users.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      provideService: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
