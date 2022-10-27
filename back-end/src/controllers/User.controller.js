const UserService = require('../services/User.service');
const { internalServerError } = require('../errors/messages');

const createCustomerUser = async (req, res) => {
  try {
    const user = await UserService.createCustomerUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    const { code, message } = internalServerError;
    return res.status(code).json({ message });
  }
};

module.exports = {
  createCustomerUser,
};