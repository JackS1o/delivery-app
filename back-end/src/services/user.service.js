const md5 = require('md5');
const { user } = require('../database/models');

const createUser = async (newUser, role) => {
  const User = await user.create({
    ...newUser,
    password: md5(newUser.password),
    role,
  });
  return User;
};

const getUser = async (email) => {
  const userData = await user.findOne({ where: { email } });
  return userData;
};

module.exports = {
  createUser,
  getUser,
};
