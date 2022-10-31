"use strict";
require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "sale",
    {
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
    },
    {
      timestamps: false,
    }
  );
  Sale.associate = (models) => {
    Sale.belongsTo(
      models.Sale,
      { foreignKey: "user_id", as: "buyer" },
      { foreignKey: "seller_id", as: "seller" }
    );
    Sale.hasMany(models.SalesProduct, {
      foreignKey: "sale_id",
      as: "salesProducts",
    });
  };

  return Sale;
};
