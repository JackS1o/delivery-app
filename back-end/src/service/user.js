const { User } = require('../database/models');

const getUser = async () => {
  const userData = await User.findAll();
  console.log(userData);
  const result = userData.map((item) => item.dataValues);
  return result;

};
module.exports = { getUser };
