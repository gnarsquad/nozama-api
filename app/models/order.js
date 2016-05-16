'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _owner: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: false 
     },
     lineItems: [{
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
     }]
   },
     {timestamps: true
 });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
