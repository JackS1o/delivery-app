const express = require('express');
const loginController = require('../controllers/user.controller');
const middleLogin = require('../middlewares/login');

const router = express.Router();

router
  .post('/login',
  middleLogin.existentUser,
  loginController.getAll);

module.exports = router;