"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Food_Category extends Model {
    static associate(models) {
      // define association here
    }
  }
  Food_Category.init(
    {
      food_id: DataTypes.INTEGER(11),
      category_id: DataTypes.INTEGER(11),
      created_at: DataTypes.TIMESTAMP,
      updated_at: DataTypes.TIMESTAMP,
    },
    {
      sequelize,
      modelName: "Food_Category",
    }
  );
  return Food_Category;
};
