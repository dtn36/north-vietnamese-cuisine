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
      food_image_url: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      region_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "regions",
          key: "region_id",
        },
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
    await queryInterface.dropTable("foods");
  },
};
