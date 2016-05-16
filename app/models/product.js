'use strict';

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  subtype: String,
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
