const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema(
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
        total_value: Number,
        last: Number,
      },
    ],
    transactions: [],
    cash_flow: [],
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

stateSchema.methods.addUser = function (u) {
  this.user.push(u);
  return this;
};

module.exports = mongoose.model('portfolio', stateSchema);
