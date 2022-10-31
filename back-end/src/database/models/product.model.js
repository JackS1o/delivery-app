"use strict";
require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      url_image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'products',
    },
  );
  Product.associate = (models) => {
    Product.belongsToMany(models.Sale, {
      through: "salesProducts",
      foreignKey: "product_id",
      as: "products",
    });
  };
  return Product;
};
