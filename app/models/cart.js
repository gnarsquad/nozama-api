'use strict';

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: String,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
},
  {timestamps: true
  });

const Cart = mongoose.model('Cart', cartSchema);

  module.exports= Cart;
