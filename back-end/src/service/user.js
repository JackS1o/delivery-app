const { user } = require('../database/models');

const getUser = async (email) => {
  const userData = await user.findOne( { where: { email } });
  return userData;
};

module.exports = { getUser };
