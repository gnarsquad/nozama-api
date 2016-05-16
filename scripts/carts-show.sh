ID=
TOKEN=
curl --include --request GET http://localhost:3000/carts/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  
