'use strict';

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _owner: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: false
     },
    //  lineItems: [lineItem]
   },
     {timestamps: true
 });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
