const { jwt } = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    jwt.verify(authorization, jwtKey);
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
  next();
};

module.exports = { validateToken };
