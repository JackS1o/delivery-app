'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      sale_id: {
        allowNull: false,
        foreingKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        primareKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'products',
          key: 'id',
        },
        primareKey: true,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};