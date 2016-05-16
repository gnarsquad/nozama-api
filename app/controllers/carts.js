'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Cart = models.user.cart;
// const lineItems = models.lineItem;
const User = models.user;
const authenticate = require('./concerns/authenticate');


const addToCart = (req, res, next) => {
  let lineItem = req.body.lineItems;
    console.log(lineItem);
  User.findById(req.currentUser._id)
  .then((user) => user.update({$push: {"cart": lineItem}}))
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};

const index = (req, res, next) => {
  Cart.find()
  .then(carts => res.json({ carts }))
  .catch(err => next(err));
};
//
// const show = (req, res, next) => {
//   Cart.findById(req.params.id)
//   .then(cart => cart ? res.json({ cart }): next())
//   .catch(err => next(err));
// };
//
// const create = (req, res, next) => {
//   let cart = Object.assign(req.body.cart, {
//     _owner: req.currentUser._id
//   });
//   Cart.create(cart)
//   .then(cart => res.json({ cart }))
//   .catch(err => next(err));
// };

module.exports = controller({
  index,
  // show,
  addToCart
}, {before: [
  {method: authenticate, except: ['index', 'show']}
]});
