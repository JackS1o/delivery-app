const { user, sale } = require('../database/models');

const getSeller = async () => {
  const sellerData = await user.findAll({ where: { role: 'seller' } });
  return sellerData;
};

const findSeller = async (name) => {
  const sellerData = await user.findOne({ where: { name } });
  return sellerData;
};

const createSale = async (body) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = body;
  const saleData = await sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  });
  return saleData;
};

module.exports = {
  getSeller,
  findSeller,
  createSale,
};
