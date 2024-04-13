"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ratings", {
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
        type: "TIMESTAMP",
      },
      updated_at: {
        allowNull: false,
        type: "TIMESTAMP",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ratings");
  },
};
