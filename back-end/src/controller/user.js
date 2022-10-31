const userService = require('../service/user');

const getAll = async (req, res) => {
  await userService.getUser();
  return res.status(200).json({ message: 'login efetuado' });
 };

 module.exports = { getAll };
