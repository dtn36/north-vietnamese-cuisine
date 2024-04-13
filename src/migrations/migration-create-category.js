"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories", {
      category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      category_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      category_description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      category_image_url: {
        allowNull: false,
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("categories");
  },
};
