'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Order = models.order;
const stripe = require('stripe')('sk_test_uDTLkYo56xbc6pDAl6Y3oPZT');
const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Order.find()
  .then((orders) => res.json({ orders }))
  .catch((err) => next(err));
};

const create = (req, res, next) => {
  console.log(req.body);
  let order = Object.assign(req, {
    // once we are passing info from front-end:
      // reactivate this!!!!!
    // _owner: req.currentUser._id
  });
  Order.create(order)
  .then(order => res.json({ order }))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  Order.findById(req.currentUser._id)
  .then(order => order ? res.json({ order }): next())
  .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = {_id: req.params.id, _owner: req.currentUser._id};
  Order.findOne(search)
  .then(order => {
    if(!order) {
      return next();
    }

    delete req.body._owner;
    return order.update(req.body.order)
    .then(() => res.sendStatus(200));
  })
  .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = {_id: req.params.id, _owner: req.currentUser._id};
  Order.findOne(search)
  .then(order => {
    if(!order){
      return next();
    }

  return order.remove()
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
  });
};

const createCharge = (req, res, next) => {
  stripe.charges.create({
    amount: req.body.amount,
    currency: "usd",
    source: req.body.stripeToken,
  }).then(charge => res.json({ charge }))
  .catch(err => next(err));
};

module.exports = controller({
  index,
  create,
  show,
  update,
  destroy,
  createCharge
}, {before: [
  {method: authenticate, except: ['index'] },
], });
