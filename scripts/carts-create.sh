TOKEN=2sGx6Jrnbn4pI5TnJocgL8V5sAlw7nHZ/aYjNKncpeI=--6YHTiHAi9mtlFziMxLwls0L+E6YNva8pxJkwoVcScDQ=
curl --include --request POST http://localhost:3000/carts \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "cart":{
      "product": "Ocarina of Time",
      "quantity": 1
    }
  }'
