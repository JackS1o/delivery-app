require('dotenv').config();
const md5 = require('md5');
const { User } = require('../database/models');
const { User } = require('../database/models');

const createUser = async (newUser, role) => {
  const user = await User.create({
    ...newUser,
    password: md5(newUser.password),
    role,
  });
  return user;
};

const getUser = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  const result = user.map((item) => item.dataValues);
  return result;

};

module.exports = {
  createUser,
  getUser,
};