"use strict";
require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "sales",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreingKey: true,
        field: "user_id",
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreingKey: true,
        field: "seller_id",
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "total_price",
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "delivery_address",
      },
      deliveryNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "delivery_number",
      },
      saleDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "sale_date",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      field: { underscored: true },
    }
  );
  Sale.associate = (models) => {
    Sale.belongsTo(
      models.user,
      { foreignKey: "user_id", as: "user" },
      { foreignKey: "seller_id", as: "seller" }
    );
  };
  return Sale;
};
