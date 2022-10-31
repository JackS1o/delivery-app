const express = require('express');
const cors = require('cors');
const loginController = require('../controller/user');
const middleLogin = require('../middleware/login');

const app = express();

app.use(express.json());

app.use(cors());
app.post('/login',
// middleLogin.existentUser,
// middleLogin.regexEmail,
// middleLogin.isPasswordValid,
loginController.getAll);

module.exports = app;
