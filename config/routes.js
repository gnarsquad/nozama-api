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

// cart routes
.post('/cart', 'carts#addToCart')
.delete('/cart', 'carts#destroy')
.delete('/cart-empty', 'carts#empty')
.get('/cart', 'carts#show')
.patch('/cart', 'carts#update')


.resources('users', { only: ['index', 'show'] })
// orders routes
.get('/orders-index', 'orders#index')
.post('/orders', 'orders#create')
.get('/orders', 'orders#show')
.patch('/orders/:id', 'orders#update')
.delete('/orders/:id', 'orders#destroy')

// checkout
.post('/charge', 'orders#createCharge')
.resources('products')

// search
.get('/search', 'products#searchForProduct')
;
