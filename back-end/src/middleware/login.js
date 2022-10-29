const { User } = require('../database/models');
var md5 = require('md5');

const existentUser = async (req, res, next) => {
  const { email, password } = req.body;
  const bodyPassword = md5(password)

  const user = await User.findOne({ where: { email } });
  const dataPassword = user.password;
  
  if (!user || dataPassword !== bodyPassword) {
    res.status(404).json({ message: 'usuário nao encontrado' });
  } else {
    next();
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