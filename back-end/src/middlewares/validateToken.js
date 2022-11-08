const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  jwt.verify(authorization, jwtKey, (err, _decoded) => {
    if (err) {
      return res.status(401).json({ message: 'jwt malformed' });
    }
  });
  next();
};

const validateAdmin = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { role } = jwt.verify(authorization, jwtKey);
    if (!role || role !== 'administrator') {
      return res.status(401).json({
        message: 'você não tem permissão para cadastrar novos usuários',
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  validateToken,
  validateAdmin,
};
