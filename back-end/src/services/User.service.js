const { User } = require('../database/models');
const md5 = require('md5');

const createCustomerUser = async (newUser) => {
  const user = await User.create({
    ...newUser,
    password: md5(newUser.password),
    role: 'customer',
  });
  return user;
};

module.exports = {
  createCustomerUser,
};