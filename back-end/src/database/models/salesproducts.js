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
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.sale.belongsToMany(models.products, {
      through: SalesProduct,
      as: 'products',
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  }; 
  return SalesProduct;
};
