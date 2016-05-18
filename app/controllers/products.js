'use strict';

//for use if we include admin functionality

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Product = models.product;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Product.find()
    .then(products => res.json({ products }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => product ? res.json({ product }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let product = Object.assign(req.body.product);
  Product.create(product)
    .then(product => res.json({ product }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id};
  Product.findOne(search)
    .then(product => {
      if (!product) {
        return next();
      }

      delete req.body._owner;  // disallow owner reassignment.
      return product.update(req.body.product)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id};
  Product.findOne(search)
    .then(product => {
      if (!product) {
        return next();
      }

      return product.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate, except: ['show', 'index'] },
], });
