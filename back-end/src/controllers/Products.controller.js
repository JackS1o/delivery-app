const ProductsService = require('../services/Products.service');

const getAllProducts = async (_req, res) => {
    const products = await ProductsService.getAllProducts();
    return res.status(200).json(products);
   };

   module.exports = {
    getAllProducts,
  };