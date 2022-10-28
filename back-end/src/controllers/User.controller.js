const UserService = require('../services/User.service');
const { internalServerError } = require('../errors/messages');

const createUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body, 'customer');
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    const { code, message } = internalServerError;
    return res.status(code).json({ message });
  }
};

module.exports = {
  createUser,
};