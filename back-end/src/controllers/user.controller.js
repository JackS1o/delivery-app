const userService = require('../services/user.service');
const { internalServerError } = require('../errors/messages');

const createUser = async (req, res) => {
  const { role } = req.query;
  try {
    const user = await userService.createUser(req.body, role);
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

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await userService.deleteUser(id);
  if (!result) {
    return res.status(500).json({ message: 'algo deu errado...' });
  }
  return res.status(200).json({
    message: 'Usuário removido com sucesso.',
  });
};
 
const getAllUsers = async (req, res) => {
const getUsers = await userService.getAll();
return res.status(200).json(getUsers);
};

module.exports = {
  createUser,
  getAll,
  deleteUser,
  getAllUsers,
};
