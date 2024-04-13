"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admins", {
      admin_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      admin_username: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      admin_password: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      admin_full_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      created_at: {
        allowNull: false,
        type: "TIMESTAMP",
      },
      updated_at: {
        allowNull: false,
        type: "TIMESTAMP",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admins");
  },
};
