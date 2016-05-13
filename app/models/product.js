'use strict';

const mongoose = require('mongoose');
require('mongoose-type-url');

require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;

const productSchema = new mongoose.Schema({
  type: String,
  subtype: String,
  name: String,
  description: String,
  price: { type: Currency, required: true, min: -20000, max: 50000 },
  stock: Number,
  image: {
      url: {type: mongoose.SchemaTypes.Url, required: true},
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
