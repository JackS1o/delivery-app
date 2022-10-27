const express = require('express');
const loginController = require('../controller/user');
const middleLogin = require('../middleware/login');

const app = express();
app.use(express.json());

app.post('/login',
middleLogin.existentUser,
middleLogin.regexEmail,
middleLogin.isPasswordValid,
loginController.getAll);

module.exports = app;
