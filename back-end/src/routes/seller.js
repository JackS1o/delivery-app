const express = require('express');
const sellerController = require('../controllers/seller.controller');
const tokenValidate = require('../middlewares/validateToken');

const router = express.Router();

router
  .get('/seller', sellerController.getSeller)
  .post('/sales', tokenValidate.validateToken, sellerController.createSale)
  

module.exports = router;