const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router
  .get('/sales', salesController.getAllSales);

module.exports = router;