const { User } = require('../database/models');

const getUser = async () => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  const result = user.map((item) => item.dataValues);
  return result;

};
module.exports = { getUser };
