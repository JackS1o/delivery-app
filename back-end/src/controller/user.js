const userService = require('../service/user');

const getAll = async (req, res) => {
  const { email, password } = req.body;
  const getUser = await userService.getUser();
  const filteredUser = getUser.filter((users) => users.email === email);
  const dataUser = {
    name: filteredUser[0].name,
    email: filteredUser[0].email,
    role: filteredUser[0].role,
    password,
  };
  return res.status(200).json(dataUser);
 };

 module.exports = { getAll };
