const { jwt } = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido ou expirado' });
  }
  next();
};

module.exports = { validateToken };
