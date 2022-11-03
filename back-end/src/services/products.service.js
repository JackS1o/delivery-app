const { products } = require('../database/models');
 
const getAllProducts = async () => {
  const product = await products.findAll();
  return product;
};

module.exports = {
  getAllProducts,
};
