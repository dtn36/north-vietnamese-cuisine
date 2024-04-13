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
      food_id: DataTypes.INTEGER(11),
      user_id: DataTypes.INTEGER(11),
      rating_value: DataTypes.INTEGER(5),
      created_at: DataTypes.TIMESTAMP,
      updated_at: DataTypes.TIMESTAMP,
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};
