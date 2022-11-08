const express = require('express');
const UserController = require('../controllers/user.controller');
const blockInvalidUser = require('../middlewares/blockInvalidUser');
const { validateAdmin } = require('../middlewares/validateToken');

const router = express.Router();

router
  .post('/register', blockInvalidUser, UserController.createUser)
  .post('/admin/manage', blockInvalidUser, validateAdmin, UserController.createUser);

module.exports = router;