'use strict';
require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    sale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sale, {
      throught: 'SalesProduct',
      foreignKey: 'sale_id',
      as: 'sales',
    });
    SalesProduct.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'products',
    });
  };
  return SalesProduct;
};