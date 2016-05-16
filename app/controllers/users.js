'use strict';

// const debug = require('debug')('nozama-api:users');

const controller = require('lib/wiring/controller');
const models = require('app/models');
const User = models.user;


// const lineItems = models.lineItem;


const crypto = require('crypto');

const authenticate = require('./concerns/authenticate');

const HttpError = require('lib/wiring/http-error');

const MessageVerifier = require('lib/wiring/message-verifier');

const encodeToken = (token) => {
  const mv = new MessageVerifier('secure-token', process.env.SECRET_KEY);
  return mv.generate(token);
};

const getToken = () =>
  new Promise((resolve, reject) =>
    crypto.randomBytes(16, (err, data) =>
      err ? reject(err) : resolve(data.toString('base64'))
    )
  );

const userFilter = { passwordDigest: 0, token: 0 };

const index = (req, res, next) => {
  User.find({}, userFilter)
    .then(users => res.json({ users }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  User.findById(req.params.id, userFilter)
    .then(user => user ? res.json({ user }) : next())
    .catch(err => next(err));
};

const makeErrorHandler = (res, next) =>
  error =>
    error && error.name && error.name === 'ValidationError' ?
      res.status(400).json({ error }) :
    next(error);

const signup = (req, res, next) => {
  let credentials = req.body.credentials;
  let user = { email: credentials.email, password: credentials.password };
  getToken().then(token =>
    user.token = token
  ).then(() =>
    new User(user).save()
  ).then(newUser => {
    let user = newUser.toObject();
    delete user.token;
    delete user.passwordDigest;
    res.json({ user });
  }).catch(makeErrorHandler(res, next));

};

const signin = (req, res, next) => {
  let credentials = req.body.credentials;
  let search = { email: credentials.email };
  User.findOne(search
  ).then(user =>
    user ? user.comparePassword(credentials.password) :
          Promise.reject(new HttpError(404))
  ).then(user =>
    getToken().then(token => {
      user.token = token;
      return user.save();
    })
  ).then(user => {
    user = user.toObject();
    delete user.passwordDigest;
    user.token = encodeToken(user.token);
    res.json({ user });
  }).catch(makeErrorHandler(res, next));
};

const signout = (req, res, next) => {
  getToken().then(token =>
    User.findOneAndUpdate({
      _id: req.params.id,
      token: req.currentUser.token,
    }, {
      token,
    })
  ).then((user) =>
    user ? res.sendStatus(200) : next()
  ).catch(next);
};

const changepw = (req, res, next) => {
  User.findOne({
    _id: req.params.id,
    token: req.currentUser.token,
  }).then(user =>
    user ? user.comparePassword(req.body.passwords.old) :
      Promise.reject(new HttpError(404))
  ).then(user => {
    user.password = req.body.passwords.new;
    return user.save();
  }).then((/*user*/) =>
    res.sendStatus(200)
  ).catch(makeErrorHandler(res, next));
};

// const addToCart = (req, res, next) => {
//   // console.log(req.body)
//   // let user = Object.assign(req.body.lineItems, {
//   //   // _owner: req.currentUser._id
//   // });
//   // lineItems.push(req.body.cart)
//   // .then(lineItems => res.json({ lineItems }))
//   // .catch(err => next(err));
//   let lineItem = req.body.lineItems;
//     console.log(lineItem);
//   User.findById(req.currentUser._id)
//   .then((user) => user.update({$push: {"cart": lineItem}}))
//   .then(() => res.sendStatus(200))
//   .catch(err => next(err));
//
//   // return user.update({$push: {"cart": lineItem}})
// };

// const create = (req, res, next) => {
//   let example = Object.assign(req.body.example, {
//     _owner: req.currentUser._id,
//   });
//   Example.create(example)
//     .then(example => res.json({ example }))
//     .catch(err => next(err));
// };



module.exports = controller({
  index,
  show,
  signup,
  signin,
  signout,
  changepw,
  // addToCart
}, { before: [
  { method: authenticate, except: ['signup', 'signin'] },
], });
