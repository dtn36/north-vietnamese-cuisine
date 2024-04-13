"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    static associate(models) {
      // define association here
    }
  }
  Region.init(
    {
      region_id: DataTypes.INTEGER(11),
      region_name: DataTypes.STRING(50),
      region_description: DataTypes.TEXT,
      region_image_url: DataTypes.STRING(255),
      created_at: DataTypes.TIMESTAMP,
      updated_at: DataTypes.TIMESTAMP,
    },
    {
      sequelize,
      modelName: "Region",
    }
  );
  return Region;
};
