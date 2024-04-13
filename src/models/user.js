"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      user_id: DataTypes.INTEGER(11),
      user_username: DataTypes.STRING(50),
      user_password: DataTypes.STRING(50),
      user_email: DataTypes.STRING(50),
      user_full_name: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
