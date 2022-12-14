const md5 = require('md5');
const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });
const { user } = require('../database/models');

function createToken(role) {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ role }, jwtKey, jwtConfig);
  return token;
}

const createUser = async (newUser, newUserRole) => {
  const User = await user.create({
    ...newUser,
    password: md5(newUser.password),
    role: newUserRole,
  });
  const { id, name, email, role } = User.dataValues;
  return { id, name, email, role, token: createToken(role) };
};

const getUser = async (mail) => {
  const userData = await user.findOne({ where: { email: mail } });
  const { id, name, email, role } = userData.dataValues;
  return { id, name, email, role, token: createToken(role) };
};

const deleteUser = async (id) => {
  const response = await user.destroy({ where: { id } });
  return response;
};

const getAll = async () => {
  const users = await user.findAll();
  return users;
};

module.exports = {
  createUser,
  getUser,
  deleteUser,
  getAll,
};
