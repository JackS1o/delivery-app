// 'use strict';
// require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'users',
  });

  User.associate = (models) => {
<<<<<<< HEAD
    User.hasMany(models.Sale, { foreignKey: 'id', as: 'users' });
    // User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'sales' });
=======
    User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'buyer' });
    User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'seller' });
>>>>>>> d5da5370c61495c612c572227fd4c38ff5069f20
  };

  
  return User;
};

