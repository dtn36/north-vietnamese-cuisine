"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      user_username: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      user_password: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      user_full_name: {
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
    await queryInterface.dropTable("users");
  },
};
