const express = require('express');
const sellerController = require('../controllers/seller.controller');
const tokenValidate = require('../middlewares/validateToken');

const router = express.Router();

router
  .get('/seller', sellerController.getSeller)
  .post('/sales', tokenValidate.validateToken, sellerController.createSale)
  .get('/sales', sellerController.getSales)
  .get('/sales/:id', sellerController.getSalesById)
  .get('/seller/:id', sellerController.getSalesBySellerId)
  .get('/seller/:id', sellerController.getSellerById)
  .put('/sales/:id', sellerController.updateSaleStatus);
  
module.exports = router;