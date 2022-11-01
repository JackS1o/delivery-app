const userService = require('../service/user');

const getAll = async (req, res) => {
  const { email } = req.body;
  const getUser = await userService.getUser(email);
  return res.status(200).json(getUser);
 };

 module.exports = { getAll };
