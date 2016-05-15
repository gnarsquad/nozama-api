'use strict';

const mongoose = require('mongoose');
require('mongoose-type-url');

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
  stock: {
    type: Number,
    required: true,
  },
  image: {
      url: {type: mongoose.SchemaTypes.Url, required: true},
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

productSchema.virtual('length').get(function length() {
  return this.text.length;
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
