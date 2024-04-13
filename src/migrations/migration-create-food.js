"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("foods", {
      food_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      food_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      food_description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      food_region: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      food_image_url: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: {
          model: "categories",
          key: "category_id",
        },
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
    await queryInterface.dropTable("foods");
  },
};
