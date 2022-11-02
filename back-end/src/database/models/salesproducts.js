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
    SalesProduct.belongsToMany(models.sales, {
      through: 'salesProducts',
      foreignKey: 'sale_id',
      as: 'sales',
      otherKey: 'product_id',
    });
    models.sales.belongsToMany(models.products, {
      through: SalesProduct,
      as: 'products',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }; 
  return SalesProduct;
};
