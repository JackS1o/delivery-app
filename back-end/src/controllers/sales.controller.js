const salesService = require('../services/sales.service');

const getAllSales = async (_req, res) => {
    const sales = await salesService.getAllSales();
    return res.status(200).json(sales);
   };

   module.exports = {
    getAllSales,
  };