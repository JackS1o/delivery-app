'use strict';
require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('sales_products', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    field: { underscored: true },
  });
  SalesProduct.associate = (models) => {
    SalesProduct.belongsToMany(models.sale, {
      through: 'sales_products',
      foreignKey: 'saleId',
      as: 'sales',
      otherKey: 'productId',
    });
    models.sale.belongsToMany(models.products, {
      through: SalesProduct,
      as: 'products',
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }; 
  return SalesProduct;
};
