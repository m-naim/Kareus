const { Number } = require('mongoose');
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema(
  {
    userId: String,
    name: String,
    symbol: String,
    last: Number,
    history: [],
  },
);

module.exports = mongoose.model('stock', stockSchema);
