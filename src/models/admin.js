"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
