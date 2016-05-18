'use strict';

const mongoose = require('mongoose');
// const lineItem = require('app/models/lineitems');

const orderSchema = new mongoose.Schema({
    _owner: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
       required: false
     },
     lineItems: []
   },
     {timestamps: true
 });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
