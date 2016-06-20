'use strict';

//for use if we include admin functionality

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Product = models.product;
const configureName = require('../../scripts/configure-name');

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

const searchForProduct = (req, res, next) => {
  // console.log(req.body)
  let key = Object.keys(req.query);
  let searchInput = key.toString();
  let searchName = configureName(searchInput);

  Product.find().then(products => products.forEach((product) => {
    let name = product.name;
    let lowerCaseName = configureName(name);
    if (lowerCaseName.includes(searchName)) {
      res.json({product});
    }
  })).catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  searchForProduct,
}, { before: [
  { method: authenticate, except: ['show', 'index'] },
], });
