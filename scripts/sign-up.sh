#!/bin/bash

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "New@example.email",
      "password": "a",
      "password_confirmation": "a"
    }
  }'
