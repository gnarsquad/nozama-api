'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const User = models.user;
const authenticate = require('./concerns/authenticate');
const HttpError =require('lib/wiring/http-error');
const mongoose = require ('app/middleware/mongoose');


const addToCart = (req, res, next) => {
  console.log(req.body);
  User.findById(req.currentUser._id)
  // .then((user) => user.update({$push: {"cart": req.body}}))
  .then((user) => {
    user.update({$push: {"cart": req.body}});
    user.cart.push(req.body);
    return user.save();
  })

  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  console.log("cart: " + req.currentUser.cart);
  User.findById(req.currentUser._id)
  .then(() => res.json({cart: req.currentUser.cart}))
  .catch(err => next(err));
};


const destroy = (req, res, next) => {
  console.log(req.body.productid);
  // findById .then user is the argment
  // return user.update()
  User.findById(req.currentUser._id)
    .then((user) =>
    user.update( {'$pull': {'cart': {'productid': req.body.productid}}}))
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

const updateQty = (req, res, next) => {
  // let productId = mongoose.Types.ObjectId(req.body.productid);
  User.findById(req.currentUser._id)
  .then((user) => {
    // console.log(user.cart[0]);
    // console.log(req.body.productid);
    // console.log(user.cart[0].quantity);
    // let user = req.currentUser._id;
    console.log(user.cart);
    for (let i = 0; i < user.cart.length; i++) {
      if (user.cart[i].productid.toString() === req.body.productid) {
        // console.log(user.cart[i]);
        // return user.cart;
        console.log(user.cart[i].quantity);
        user.cart[i].quantity = req.body.quantity;
        console.log(user.cart[i].quantity);
        return user.save(console.log('save'));
      }

    }
    throw new HttpError(404);
  }
  )
    // .then(() => user.update({'$set': {quantity: req.body.quantity}}));
    // .then((user) => user.save())
    .then((user) => console.log(user))
    .then(() => res.sendStatus(200))
    .catch(err =>next(err));
};

// user.update({cart:{ $in: [{productid: req.body.productid}] } },
//       {$set: {quantity: req.body.quantity} }


// db.inventory.update(
//                      { tags: { $in: [{productid: <id>}] } },
//                      { $set: { quantity: <qty> } }
//                    )


// Model.update(
//     { 'pdfs.pdf_id': pdf_id },
//     { $set: {
//         'pdfs.$.title': title,
//         'pdfs.$.description': description
//     }}, function (err, numAffected) { ... }
// );


// db.user.update({$set:{"cart":{"productid": "5739eb783e7fa5497f620d30"}}, {"quantity": 2}})


module.exports = controller({
  show,
  addToCart,
  destroy,
  updateQty
}, {before: [
  {method: authenticate}
]});
