const service = require('../services/seller.service');

const getSeller = async (req, res) => {
  const seller = await service.getSeller();
  return res.status(200).json(seller);
}

module.exports = {
  getSeller,
};
