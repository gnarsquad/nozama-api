'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Product = models.products;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Product.find()
    .then(products => res.json({ products }))
    .catch(err => next(err));
};

module.exports = controller({
  index,
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
