'use strict';

const mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;

const productSchema = new mongoose.Schema({
  type: String,
  subtype: String,
  name: String,
  description: String,
  price: { type: Currency, required: true, min: -20000, max: 50000 }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
