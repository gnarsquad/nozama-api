'use strict';

const models = require('app/models');
const User = models.user;

const MessageVerifier = require('lib/wiring/message-verifier');

const decodeToken = (signedSecureToken) => {
  const mv = new MessageVerifier('secure-token', process.env.SECRET_KEY);
  return mv.verify(signedSecureToken);
};

const accessDenied = (res) => {
  res.set('WWW-Authenticate', 'Token realm="Application"');
  res.status(401).send('HTTP Token: Access denied.\n');
};

const authenticate = (req, res, next) => {
  const tokenRegex = /^Token token=/;
  const separatorRegex = /\s*(?::|;|\t+)\s*/;
  let auth = req.headers.authorization;
  if (auth && tokenRegex.test(auth)) {
    let opts = auth.replace(tokenRegex, '').split(separatorRegex);
    let signedToken = opts.shift();
    let token = decodeToken(signedToken);
    User.findOne({ token })
    .then(user => {
      if (user) {
        req.currentUser = user.toObject();
        return next();
      }

      return accessDenied(res);
    })
    .catch(err => next(err));
  } else {
    return accessDenied(res);
  }
};

module.exports = authenticate;
