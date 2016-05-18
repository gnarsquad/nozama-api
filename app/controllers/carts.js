'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const User = models.user;
const authenticate = require('./concerns/authenticate');


const addToCart = (req, res, next) => {
  console.log(req.body);
  User.findById(req.currentUser._id)
  .then((user) => user.update({$push: {"cart": req.body}}))
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  console.log("cart: " + req.currentUser.cart);
  User.findById(req.currentUser._id)
  .then(() => res.json({cart: req.currentUser.cart}))
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

// const update = (req, res, next) => {
//   let product = req.body.product;
//
//   User.findById(req.currentUser._id)
//     .then((user) =>
//     user.update( {'$pull': {'cart': {'product': {'quantity'}}}})
//     )
// };


module.exports = controller({
  show,
  addToCart,
  destroy,
}, {before: [
  {method: authenticate}
]});
