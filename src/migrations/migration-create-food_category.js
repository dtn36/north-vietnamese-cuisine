"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("food_categories", {
      food_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "foods",
          key: "food_id",
        },
      },
      category_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: "categories",
          key: "category_id",
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
    await queryInterface.dropTable("food_categories");
  },
};
