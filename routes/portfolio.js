const express = require('express');

const router = express.Router();
const portfolio = require('../models/portfolio');

router.get('/api/v1/portfolio/:name', (req, res) => {
  console.log(req.params.name);
  portfolio.findOne({
    name: req.params.name,
  })
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});
router.get('/api/v1/portfolios', (req, res) => {
  portfolio.find({}, { name: 1, _id: 0 })
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});

module.exports = router;
