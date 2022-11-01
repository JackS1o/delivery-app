const md5 = require('md5');
const { User } = require('../database/models');

const createUser = async (newUser, role) => {
  const user = await User.create({
    ...newUser,
    password: md5(newUser.password),
    role,
  });
  return user;
};

module.exports = {
  createUser,
};