'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: {
    // Correct format?
    type: mongoose.Schema.Types.Array,
    ref: 'Product',
    required: true
  },
},
  {timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
