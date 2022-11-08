const express = require('express');
const salesProductsController = require('../controllers/salesProducts.controller');

const router = express.Router();

router
  .get('/salesProducts/:id', salesProductsController.getSalesById);

module.exports = router;
