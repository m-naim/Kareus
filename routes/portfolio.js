const express = require('express');

const router = express.Router();
const portfolio = require('../models/portfolio');
const portfolioUtils = require('../utils/portfolioUtils');

router.get('/api/v1/data/portfolio/:name', (req, res) => {
  portfolio.findOne({
    name: req.params.name,
  })
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(portfolioUtils.getData(state));
    });
});

router.get('/api/v1/portfolio/:name', (req, res) => {
  console.log(req.params.name);
  portfolio.findOne({
    name: req.params.name,
  }).populate('allocation.asset')
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});
router.get('/api/v1/portfolios', (req, res) => {
  portfolio.find({})
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state.map((pft) => portfolioUtils.getData(pft)));
    });
});

module.exports = router;
