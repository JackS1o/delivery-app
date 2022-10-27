// const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

// const { JWT_SECRET } = process.env;

const existentUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.status(404).json({ message: 'usuário nao encontrado' });
  } else {
    next(user);
  }
};
const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length <= 6) {
    return res.status(400).json({ message: 'senha incorreta' });
  }
  next();
};
const regexEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'informe um email válido' });
  }
  next();
};

module.exports = { existentUser, isPasswordValid, regexEmail };