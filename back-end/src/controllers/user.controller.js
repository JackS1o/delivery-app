const userService = require('../services/user.service');
const { internalServerError } = require('../errors/messages');

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body, 'customer');
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    const { code, message } = internalServerError;
    return res.status(code).json({ message });
  }
};

const getAll = async (req, res) => {
  const { email } = req.body;
  const getUser = await userService.getUser(email);
  return res.status(200).json(getUser);
 };
 
 const getAllUsers = async (req, res) => {
  const getUsers = await userService.getAll();
  return res.status(200).json(getUsers);
 };

module.exports = {
  createUser,
  getAll,
  getAllUsers,
};
