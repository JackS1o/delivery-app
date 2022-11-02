const { sales } = require('../database/models');
 
const getAllSales = async () => {
  const sale = await sales.findAll();
  console.log(sale);
  return sale;
};

module.exports = {
  getAllSales,
};
