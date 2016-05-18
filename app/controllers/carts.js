'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const User = models.user;
const authenticate = require('./concerns/authenticate');
const HttpError = require('lib/wiring/http-error');


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
  // findById .then user is the argment
  // return user.update()
  User.findById(req.currentUser._id)
    .then((user) =>
    user.update( {'$pull': {'cart': {'productid': req.body.productid}}}))
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

const empty = (req, res, next) => {
  User.findById(req.currentUser._id)
    .then((user) =>
    user.update( {'$set': {'cart': []}}, {multi: true}))
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  User.findById(req.currentUser._id)
    .then((user) => {
      for (let i = 0; i < user.cart.length; i++) {
        if (user.cart[i].productid === req.body.productid) {
          console.log(user.cart[i]);
          user.cart[i].quantity = req.body.quantity;
          console.log('add qty: ' + req.body.quantity);
          console.log(user.cart[i]);
          console.log(user);
          return user.save();
        }
      }
      throw new HttpError(404);
    })
    // .then((user) => {
    //   console.log(user);
    // //   user.update({'$set': {quantity: req.body.quantity}});
    // })
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};


module.exports = controller({
  show,
  addToCart,
  update,
  destroy,
  empty,
}, {before: [
  {method: authenticate}
]});
