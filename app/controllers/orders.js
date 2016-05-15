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

const create = (req, res, next) => {
  let order = Object.assign(req.body.order, {
    _owner: req.currentUser._id
  });
  Order.create(order)
  .then(order => res.json({ order }))
  .catch(err => next(err));
};

module.exports = controller({
  index,
  create
}, {before: [
  {method: authenticate, except: ['index'] },
], });
