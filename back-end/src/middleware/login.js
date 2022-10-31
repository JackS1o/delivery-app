const { User } = require("../database/models");
let md5 = require("md5");

const existentUser = async (req, res, next) => {
  const { email, password } = req.body;
  const bodyPassword = md5(password);
  try {
    await User.findOne({ where: { email, password: bodyPassword } });
  } catch {
    return res
      .status(404)
      .json({ message: "usuário nao encontrado, email ou senha incorretos" });
  }
  next();
};
const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length <= 6) {
    return res.status(400).json({ message: "senha no formato incorreta" });
  }
  next();
};
const regexEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  try {
    emailRegex.test(email);
  } catch {
    return res.status(400).json({ message: "informe um email válido" });
  }
  next();
};

module.exports = { existentUser, isPasswordValid, regexEmail };
