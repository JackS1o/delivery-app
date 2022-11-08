const salesProductsService = require('../services/salesProducts.service');

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesProductsService.getSalesById(id);
  return res.status(200).json(sales);
};

module.exports = {
  getSalesById,
};
