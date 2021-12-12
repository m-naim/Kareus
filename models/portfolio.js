const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema(
  {
    userId: String,
    name: String,
    allocation: [],
    transactions: [],
    cash_flow: [],
  },
);

module.exports = mongoose.model('portfolio', stateSchema);
