'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Cart = models.cart;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Cart.find()
  .then(carts => res.json({ carts }))
  .catch(err => next(err));
};

module.exports = controller({
  index,
});
