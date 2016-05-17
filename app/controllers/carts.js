'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
// const Cart = models.user.cart;
// const lineItems = models.lineItem;
const User = models.user;
const authenticate = require('./concerns/authenticate');


const addToCart = (req, res, next) => {
  let lineItem = req.body.lineItems;
    console.log(lineItem);
  User.findById(req.currentUser._id)
  .then((user) => user.update({$push: {"cart": lineItem}}))
  .then(() => res.sendStatus(200))
  .catch(err => next(err));
};


const index = (req, res, next) => {
  User.find('cart')
  .then(carts => res.json({ carts }))
  .catch(err => next(err));
};

const show = (req, res, next) => {
  // User.findById(req.currentUser._id)
  User.findById(req.currentUser._id)
  .then(cart => cart ? res.json({ cart }): next())
  .catch(err => next(err));
};

const destroy = (req, res, next) => {
  console.log(req.body.product + "asdf");
  User.findByIdAndUpdate(req.currentUser._id, {
      '$pull': { 'cart':{'productid': req.body.product}
      }
  })
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};
//     User.findById(req.currentUser._id)
//     .then(user => {
//       if (!user){
//         next();
//       }
//       console.log(req.currentUser);
//       // return res.sendStatus(204);
//       User.update({_id: req.currentUser._id},
//         {$pull:{ cart:{
//                  $elemMatch: {productid:'5739eb783e7fa5497f620d30'} }
//               }
//             });
//   // { $pull: { results: { answers: { $elemMatch: { q: 2, a: { $gte: 8 } } } } } },
//     }).then(() => res.sendStatus(200))
//     .catch(err => next(err));



// const destroy = (req, res, next) => {
//   User.findById(req.currentUser._id)
//   .then(console.log(User))
//     .then((user) => user.cart.remove())
//     .catch(err => next(err));
// };


module.exports = controller({
  index,
  show,
  addToCart,
  destroy,
}, {before: [
  {method: authenticate, except: ['index', 'show']}
]});
