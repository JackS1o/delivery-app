const express = require('express');
const loginController = require('../controllers/user.controller');

const router = express.Router();

router
  .get('/users', loginController.getAllUsers)

module.exports = router;