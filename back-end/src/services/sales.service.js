const { sales } = require('../database/models');
 
const getAllSales = async () => {
  const sale = await sales.findAll();
  return sale;
};

module.exports = {
  getAllSales,
};
