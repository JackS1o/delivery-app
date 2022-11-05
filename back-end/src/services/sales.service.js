const { sale } = require('../database/models');
 
const getAllSales = async () => {
  const sales = await sale.findAll();
  return sales;
};

module.exports = {
  getAllSales,
};
