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
      food_region: DataTypes.STRING(50),
      food_image_url: DataTypes.STRING(255),
      category_id: DataTypes.INTEGER(11),
    },
    {
      sequelize,
      modelName: "Food",
    }
  );
  return Food;
};
