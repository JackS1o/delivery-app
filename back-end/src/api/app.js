const express = require('express');
const cors = require('cors');
const loginController = require('../controllers/User.controller');
const productsController = require('../controllers/Products.controller');
const middleLogin = require('../middleware/login');

const app = express();

app.use(express.json());

app.use(cors());
app.post('/login',
middleLogin.existentUser,
middleLogin.regexEmail,
middleLogin.isPasswordValid,
loginController.getAll);

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/customer/products',  productsController.getAllProducts);

module.exports = app;
