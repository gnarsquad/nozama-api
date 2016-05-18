# Project Components

## Links

Deployed App:

Heroku:


Front End Repository:
<https://github.com/gnarsquad/nozama-front-end>

ERD:

## Description

Nozama is an e-commerce web app that offers users a fine assortment of videogame inspired wares.  Want to fortify your command center against baneling balls?  Check out our siege tanks.  Need to transmute your amulets into a ring? We've got quite a treasure for you in our Horadric Cubes.
Upon creating an account and signing in, users can view the range of products available.  From these, they can add the products they want to their cart.  If they change their mind prior to checkout, they can update item quantities in their cart or delete items entirely.
To check out, users must provide credit card information via stripe which is processed in a secure environment.  Upon verification of their payment, the user's cart is reset and the items they have purchased are displayed in their previous orders.

## Expected Routes

### Cart Routes

| Verb   | Uri Pattern   | Controller Action |
|--------|---------------|-------------------|
| Post   | '/cart'       | 'carts#addToCart' |
| Delete | '/cart'       | 'carts#destroy'   |
| Delete | '/cart-empty' |   'carts#empty'   |
| Get    | '/cart'       | 'carts#show'      |
| Patch  | '/cart'       | 'carts#update'    |

Example curl script:

TOKEN=JmTKVhjHlvw9JeM2llTZsPA9zM/x/gWe4uxs5NZYjxw=--m2NrkL/xwOnYJhHWKoYZda7ke+fx4M7Qaeil7A0W3oI=
curl --include --request DELETE http://localhost:3000/cart \
     --header "Authorization: Token token=$TOKEN" \
     --header "Content-Type: application/json" \
     --data '{
         "productid": "5739eb783e7fa5497f620d36",
         "quantity": "3"
     }'

### Orders Routes

| Verb   | Uri Pattern   | Controller Action |
|--------|---------------|-------------------|
| Get    | '/orders'     | 'orders#index'    |
| Post   | '/orders'     | 'orders#create'   |
| Get    | '/orders/:id' |   'orders#show'   |
| Patch  | '/orders/:id' | 'orders#update'   |
| Delete | '/orders/:id' | 'orders#destroy'  |

Example curl script:

TOKEN="2a4CTcSPtFvk8imstqtqmayTZOGtKtnpp10z8o0TTMs=--AH7GSLohUWDOvjgHr4mIWhZyZk98DVv8gxg/jbcmZ+I="
curl --include --request POST http://localhost:3000/orders \
  --header "Authorization: Token token=nqDPgVuDMHsMWG09PRMmoX3lx2QarC6GPr669s36QUI=--fTbpOwg+b1JGuMkSiTHokabkMx9tRzIYEP+yILJbZxY=" \
  --header "Content-Type: application/json" \
  --data '{
    "lineItems": [{
        "product": {
          "quantity": "1",
          "productid": "5739eb783e7fa5497f620d30",
          "name": "cool order bro",
          "price": "1000000000"
        }
  }'

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:3000/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/:id

Request:

```sh
curl --include --request PATCH http://localhost:3000/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
ID=1 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/:id

Request:

```sh
curl --include --request DELETE http://localhost:3000/sign-out/$ID \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID=1 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

### Users

| Verb | URI Pattern | Controller#Action |
|------|-------------|-------------------|
| GET  | `/users`    | `users#index`     |
| GET  | `/users/1`  | `users#show`      |

#### GET /users

Request:

```sh
curl --include --request GET http://localhost:3000/users \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/users.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "users": [
    {
      "id": 2,
      "email": "another@example.email"
    },
    {
      "id": 1,
      "email": "an@example.email"
    }
  ]
}
```

#### GET /users/:id

Request:

```sh
curl --include --request GET http://localhost:3000/users/$ID \
  --header "Authorization: Token token=$TOKEN"
```

```sh
ID=2 TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/user.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 2,
    "email": "another@example.email"
  }
}
```

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
