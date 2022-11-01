const md5 = require('md5');
const { user } = require('../database/models');

const existentUser = async (req, res, next) => {
  const { email, password } = req.body;
  const bodyPassword = md5(password);
  const userData = await user.findOne({ where: { email, password: bodyPassword } });
  if (!userData) {
    return res.status(404).json({ message: 'Usuário não existe' });
  }
  next();
};

const isPasswordValid = async (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length <= 6) {
    return res.status(400).json({ message: 'senha no formato incorreta' });
  }
  next();
};

const regexEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  try {
    emailRegex.test(email);
  } catch (error) {
  console.error(error);
  res.status(400).json({ message: 'informe um email válido' });
  }
  next();
};

module.exports = { existentUser, isPasswordValid, regexEmail };
