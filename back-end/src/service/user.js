require('dotenv').config();
let md5 = require('md5');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const getUser = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  const result = user.map((item) => item.dataValues);
  return result;

};
module.exports = { getUser };
