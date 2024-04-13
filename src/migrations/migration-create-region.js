"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("regions", {
      region_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11),
      },
      region_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      region_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      region_image_url: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
    await queryInterface.dropTable("regions");
  },
};
