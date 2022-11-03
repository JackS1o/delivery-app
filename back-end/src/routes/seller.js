const express = require('express');
const sellerController = require('../controllers/seller.controller');

const router = express.Router();

router
  .get('/seller', sellerController.getSeller);

module.exports = router;