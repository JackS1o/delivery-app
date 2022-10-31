const { Product } = require('../database/models');
 
const getAllProducts = async () => {
    const product = await Product.findAll();

    return product;
  
  };

  module.exports = {
     getAllProducts,
  }