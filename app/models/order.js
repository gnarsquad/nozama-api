'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _owner: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: false
     },
     items: [
       {
         quantity: Number,
         productid: String,
         name: String,
         price: Number,
         image: String,
      }
    ]
   },
     {timestamps: true
 });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
