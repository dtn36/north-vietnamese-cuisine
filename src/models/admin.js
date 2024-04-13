"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      admin_id: DataTypes.INTEGER(11),
      admin_username: DataTypes.STRING(50),
      admin_password: DataTypes.STRING(50),
      admin_full_name: DataTypes.STRING(50),
      created_at: DataTypes.TIMESTAMP,
      updated_at: DataTypes.TIMESTAMP,
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
