const Portfolio = require('../models/portfolio');

module.exports = {
  new: (req, res) => {
    const newTask = new Portfolio({
      name: req.body.name,
    });
    newTask.addUser(req.body.token);
    newTask.addList(req.body.list_id);
    newTask.save().then((data) => res.send(data))
      .catch(next);
  },
  get: (req, res) => {
    Portfolio.findOne({
      name: 'current',
    })
      .exec((err, state) => {
        if (err) res.status(500).send({ error: 'Something failed!' });
        else if (!state || state.length === 0) res.status(404).send({ message: 'not found' });
        else res.send(state);
      });
  },
};
