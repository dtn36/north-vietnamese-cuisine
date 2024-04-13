"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ratings", {
      rating_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      food_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: "foods",
          key: "food_id",
        },
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: "users",
          key: "user_id",
        },
      },
      rating_value: {
        allowNull: false,
        type: Sequelize.INTEGER(5),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ratings");
  },
};
