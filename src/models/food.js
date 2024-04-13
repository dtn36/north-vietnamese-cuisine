"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
      // define association here
    }
  }
  Food.init(
    {
      food_id: DataTypes.INTEGER(11),
      food_name: DataTypes.STRING(50),
      food_description: DataTypes.TEXT,
      food_image_url: DataTypes.STRING(255),
      region_id: DataTypes.INTEGER(11),
      created_at: DataTypes.TIMESTAMP,
      updated_at: DataTypes.TIMESTAMP,
    },
    {
      sequelize,
      modelName: "Food",
    }
  );
  return Food;
};
