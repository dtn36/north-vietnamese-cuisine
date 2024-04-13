"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {
      // define association here
    }
  }
  Rating.init(
    {
      rating_id: DataTypes.INTEGER(11),
      food_id: DataTypes.INTEGER(11),
      user_id: DataTypes.INTEGER(11),
      rating_value: DataTypes.INTEGER(5),
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};
