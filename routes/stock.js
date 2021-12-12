const express = require('express');

const router = express.Router();
const Stock = require('../models/stock');

router.get('/api/v1/stocks', (req, res) => {
  Stock.find()
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});
router.get('/api/v1/stocks/:symbol', (req, res) => {
  Stock.find({ symbol: req.params.symbol })
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});
router.get('/api/v1/stocks/contains/:symbol', (req, res) => {
  Stock.find({ symbol: { $regex: `.*${req.params.symbol}.*`, $options: 'i' } })
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});

module.exports = router;
