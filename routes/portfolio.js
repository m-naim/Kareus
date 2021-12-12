const express = require('express');

const router = express.Router();
const portfolioController = require('../controllers/portfolio.ctrl');

router.get('/api/v1/portfolio', portfolioController.get);

module.exports = router;
