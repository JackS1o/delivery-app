const express = require('express');
const UserController = require('../controllers/user.controller');
const blockInvalidUser = require('../middlewares/blockInvalidUser');

const router = express.Router();

router
  .post('/register', blockInvalidUser, UserController.createUser);

module.exports = router;