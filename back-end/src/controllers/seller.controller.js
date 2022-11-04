const service = require('../services/seller.service');

const getSeller = async (req, res) => {
  const seller = await service.getSeller();
  return res.status(200).json(seller);
};

const createSale = async (req, res) => {
  const { body } = req;
  const sale = await service.createSale(body);
  return res.status(201).json(sale);
};

module.exports = {
  getSeller,
  createSale,
};
