'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Order = models.order;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Order.find()
  .then((orders) => res.json({ orders }))
  .catch((err) => next(err));
};

module.exports = controller({
  index
});
