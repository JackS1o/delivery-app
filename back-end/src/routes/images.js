const express = require('express');
const path = require('path');

const router = express.Router();

const caminho = path.resolve('public');

router.use('/images', express.static(caminho));

module.exports = router;