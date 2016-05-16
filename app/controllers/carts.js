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

const show = (req, res, next) => {
  Cart.findById(req.params.id)
  .then(cart => cart ? res.json({ cart }): next())
  .catch(err => next(err));
};

const create = (req, res, next) => {
  let cart = Object.assign(req.body.cart, {
    _owner: req.currentUser._id
  });
  Cart.create(cart)
  .then(cart => res.json({ cart }))
  .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create
}, {before: [
  {method: authenticate, except: ['index', 'show']}
]});
