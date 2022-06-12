const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: String,
    allocation: [
      {
        asset: {
          type: mongoose.Schema.Types.ObjectId,
          require: true,
          ref: 'stock',
        },
        weight: Number,
        qty: Number,
        bep: Number,
        total_value: Number,
        symbol: String,
        last: Number,
      },
    ],
    transactions: [],
    cash_flow: [{
      date: Date,
      amount: Number,
      action: String,
    }],
    perfs: {
      cum_All: [],
      cum_1M: [],
      cum_6M: [],
      cum_1Y: [],
      sum: [],
      date: [],
    },
  },
);

portfolioSchema.methods.addUser = function (u) {
  this.user.push(u);
  return this;
};

portfolioSchema.methods.addTransaction = function (t) {
  this.transactions.push(t);
  return this;
};

portfolioSchema.methods.addAllocation = function (a) {
  this.allocation.push(a);
  return this;
};

module.exports = mongoose.model('portfolio', portfolioSchema);
