const { User } = require('../database/models');

const createCustomerUser = async (newUser) => {
  const user = await User.create({
    ...newUser,
    role: 'customer',
  });
  return user;
};

module.exports = {
  createCustomerUser,
};