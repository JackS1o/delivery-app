'use strict';
require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'sales',
  });
  Sale.associate = (models) => {
<<<<<<< HEAD
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }, { foreignKey: 'seller_id', as: 'seller' });
    // Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });
    // Sale.hasMany(models.SalesProducts, { foreignKey: 'sale_id', as: 'salesProducts' });
=======
    Sale.belongsTo(
      models.User,
      { foreignKey: 'user_id', as: 'user' },
      { foreignKey: 'seller_id', as: 'seller' },
    );
    Sale.hasMany(models.SalesProduct, { foreignKey: 'sale_id', as: 'salesProducts' });
>>>>>>> d5da5370c61495c612c572227fd4c38ff5069f20
  };
  return Sale;
};