const Joi = require('joi');
const { User } = require('../database/models');

const EMAIL_ALREADY_EXISTS = 'Email already registered';
const NAME_ALREADY_EXISTS = 'Name already registered';

const schema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(6).required(),
});

const checkReqBody = (req, res, next) => {
  const result = schema.validate(req.body);

  if (result.error) {
    const [{ message }] = result.error.details;
    return res.status(400).json({ message });
  }

  next();
};

const checkIfUserExists = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const sameEmail = await User.findOne({ where: { email } });

    if (sameEmail) throw new Error(EMAIL_ALREADY_EXISTS);

    const sameName = await User.findOne({ where: { name } });

    if (sameName) throw new Error(NAME_ALREADY_EXISTS);

    next();
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

module.exports = [
  checkReqBody,
  checkIfUserExists,
];