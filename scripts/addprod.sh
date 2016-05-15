# signup
curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "another@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'


# sign-in
curl --include --request POST http://localhost:3000/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "another@example.email",
      "password": "an example password"
    }
  }'

#addprod
ID=573633110edabfb67d4e45f3
TOKEN=M3iTRonPyLDcY5dPR0njlegYK9t6cwitf2cSlAGgihU=--yS3h9plrTY6PLJC4RI4zap5yTj0ZFNQ9kreVLKConl8=
curl --include --request GET http://localhost:3000/users \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"
  --data '{
    "cart": {
      "product_id": "0001",
      "qty": "12"
    }
  }'
