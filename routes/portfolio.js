const express = require('express');
const { stringify } = require('postcss');

const router = express.Router();
const Portfolio = require('../models/portfolio');
const stock = require('../models/stock');
const portfolioUtils = require('../utils/portfolioUtils');

router.get('/api/v1/data/portfolio/:name', (req, res) => {
  Portfolio.findOne({
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
  Portfolio.findOne({
    name: req.params.name,
  }).populate('allocation.asset')
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});
router.get('/api/v1/portfolios', (req, res) => {
  Portfolio.find({})
    .exec((err, state) => {
      if (err) res.status(500).send({ error: 'Something failed!' });
      else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
      else res.send(state.map((pft) => portfolioUtils.getData(pft)));
    });
});

router.post('/api/v1/portfolio', (req, res) => {
  const newPortfolio = new Portfolio(req.body);
  newPortfolio.save()
    .then(
      () => res.status(200).send({ message: 'new Portfolio added with success' }),
      (err) => res.status(500).send(err),
    );
});

router.put('/api/v1/transaction/portfolio', async (req, res) => {
  try {
    const { id, transaction } = req.body;
    const query = { _id: id };
    const pft = await Portfolio.findOne(query).populate('allocation.asset');
    pft.addTransaction(transaction);
    const { allocation } = pft;

    const assetIndex = allocation.findIndex((elm) => elm.asset.symbol === transaction.symbol);

    if (assetIndex > -1) {
      const newQty = allocation[assetIndex].qty + transaction.qty;
      allocation[assetIndex].bep = (allocation[assetIndex].bep * allocation[assetIndex].qty + transaction.price * transaction.qty) / newQty;
      allocation[assetIndex].qty = newQty;
      allocation[assetIndex].value = newQty;
    } else {
      const newAlloc = {
        asset: await stock.findOne({ symbol: transaction.symbol }),
        qty: transaction.qty,
        bep: transaction.price,
        total_value: transaction.qty * transaction.price,
        symbol: transaction.symbol,
      };
      pft.addAllocation(newAlloc);
    }

    allocation.map((elm) => {
      elm.total_value = elm.asset.last * elm.qty;
      return elm;
    });

    const totalValue = allocation.reduce((sum, elm) => sum + elm.total_value, 0);

    allocation.map((elm) => {
      elm.weight = elm.total_value / totalValue;
      return elm;
    });

    pft.save();
    res.send(pft);
  } catch (err) {
    console.log(`err!!:${err}`);
    res.status(500).send({ error: err });
  }
});

router.put('/api/v1/movement/portfolio', (req, res) => {
  const query = { _id: req.body.id };
  Portfolio.findOneAndUpdate(query, { $push: { cash_flow: req.body.movement } },
    { upsert: false },
    (err, state) => {
      if (err) res.status(500).send(err);
      else if (!state) res.status(404).send({ message: 'not found' });
      else res.send(state);
    });
});
module.exports = router;
