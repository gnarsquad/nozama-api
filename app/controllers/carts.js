'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
// const Cart = models.user.cart;
// const lineItems = models.lineItem;
const User = models.user;
const authenticate = require('./concerns/authenticate');


const addToCart = (req, res, next) => {
  console.log(req.body);
  User.findById(req.currentUser._id)
  .then((user) => user.update({$push: {"cart": req.body}}))
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};


const index = (req, res, next) => {
  User.find('cart')
  .then(carts => res.json({ carts }))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  // let tmpUser = req.currentUser.cart;
  // console.log(req.currentUser.cart);
  User.findById(req.currentUser._id)
  // .then(console.log(req.currentUser.cart))
  .then(() => res.json({cart: req.currentUser.cart}))
  .catch(err => next(err));
  // User.findById(req.query.user_id).then (function(user){
  // let cart = user.cart;
  // return cart;
// })
// .then(cart => res.json({ cart }))
// .catch(err => next(err));
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
  // let product = req.body.productid;

  User.findById(req.currentUser._id)
    .then((user) =>
    user.update({'$set':{'cart':{'quantity': {'quantity': req.body.quantity}}}})
    )
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

// Person.update({'items.id': 2}, {'$set': {
//     'items.$.name': 'updated item2',
//     'items.$.value': 'two updated'
// }}, function(err) { ...


module.exports = controller({
  index,
  show,
  addToCart,
  destroy,
  update,
}, {before: [
  {method: authenticate, except: []}
]});
