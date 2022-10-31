'use strict';
require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProduct', {
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
    SalesProduct.belongsToMany(models.Sale, {
      foreignKey: 'sale_id',
      as: 'sales',
    });
    SalesProduct.belongsToMany(models.Product, {
      foreignKey: 'product_id',
      as: 'products',
    });
  };
  return SalesProduct;
};
