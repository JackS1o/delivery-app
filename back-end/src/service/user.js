const { user } = require('../database/models');

const getUser = async () => {
  // console.log(typeof user);
  const userData = await user.findAll();
  const result = userData.map((item) => item.dataValues);
  return result;
};
module.exports = { getUser };
