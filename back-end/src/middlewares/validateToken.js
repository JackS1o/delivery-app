const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  jwt.verify(authorization, jwtKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'jwt malformed' });
    }
  });
  next();
};

module.exports = { validateToken };
