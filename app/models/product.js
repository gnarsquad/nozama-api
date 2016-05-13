'use strict';

const mongoose = require('mongoose');
require('mongoose-type-url');

const productSchema = new mongoose.Schema({
  type: String,
  subtype: String,
  name: String,
  description: String,
  price: Number,
  stock: Number,
  image: {
      url: {type: mongoose.SchemaTypes.Url, required: true},
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
