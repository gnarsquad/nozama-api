'use strict';

const mongoose = require('mongoose');

const lineItemSchema = new mongoose.Schema ({
  product: {
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}
});

const LineItem = mongoose.model('LineItem', lineItemSchema);

module.exports = LineItem;
