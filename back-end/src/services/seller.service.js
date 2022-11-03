const { user } = require('../database/models');

const getSeller = async () => {
  const sellerData = await user.findAll({ where: { role: 'seller' } });
  console.log(sellerData);
  return sellerData;
}

module.exports = {
  getSeller,
};
