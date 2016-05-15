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
.resources('users', { only: ['index', 'show'] })

.get('/orders', 'orders#index')
.post('/orders', 'orders#create')
.get('/orders/:id', 'orders#show')
// .get('/orders/:id', 'orders#list')
.delete('/orders/:id', 'orders#destroy')
// .patch('/orders/:id', 'orders#update')

.resources('products')
// all routes created
;
