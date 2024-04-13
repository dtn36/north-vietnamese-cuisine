"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      category_id: DataTypes.INTEGER(11),
      category_name: DataTypes.STRING(30),
      category_description: DataTypes.TEXT,
      category_image_url: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
