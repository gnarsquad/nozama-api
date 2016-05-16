'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.post('/carts', 'carts#addToCart')


.resources('users', { only: ['index', 'show'] })
// orders routes
.get('/orders', 'orders#index')
.post('/orders', 'orders#create')
.get('/orders/:id', 'orders#show')
.patch('/orders/:id', 'orders#update')
.delete('/orders/:id', 'orders#destroy')


.resources('products')

.get('/carts', 'carts#index')
// .get('/carts/:id', 'carts#show')
.post('/carts', 'carts#addToCart')


// all routes created
;
