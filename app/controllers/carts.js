'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
// const Cart = models.user.cart;
// const lineItems = models.lineItem;
const User = models.user;
const authenticate = require('./concerns/authenticate');


const addToCart = (req, res, next) => {
  let lineItem = req.body.lineItems;
    console.log(lineItem);
  User.findById(req.currentUser._id)
  .then((user) => user.update({$push: {"cart": req.body.lineItems}}))
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};


const index = (req, res, next) => {
  User.find('cart')
  .then(carts => res.json({ carts }))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  let user = req.currentUser.cart;
  console.log(req.currentUser.cart);
  User.findById(req.currentUser._id)
  .then(() => res.json( user ))
  .catch(err => next(err));
};


const destroy = (req, res, next) => {
  console.log(req.body.productid);
  // findById .then user is the argment
  // return user.update()
  User.findById(req.currentUser._id)
    .then((user) =>
    user.update( {'$pull': {'cart': {'productid': req.body.productid}}}))
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let product = req.body.product;

  User.findById(req.currentUser._id)
    .then((user) =>
    user.update( {'$pull': {'cart': {'product':{'quantity'}}}})
    )
};


module.exports = controller({
  index,
  show,
  addToCart,
  destroy,
}, {before: [
  {method: authenticate, except: ['index']}
]});
