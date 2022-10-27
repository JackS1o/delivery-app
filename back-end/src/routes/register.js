const express = require('express');
const UserController = require('../controllers/User.controller');
const blockInvalidUser = require('../middlewares/blockInvalidUser');

const router = express.Router();

router
  .post('/register', blockInvalidUser, UserController.createCustomerUser);

module.exports = router;