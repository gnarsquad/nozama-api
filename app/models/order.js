'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: String,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  }
},
  {timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
