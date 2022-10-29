const userService = require('../service/user');

const getAll = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).json({message: 'login efetuado'});
 };

 module.exports = { getAll };