TOKEN=YCYHfHN/MpqrGoAOCJUqE1lQzDn4YvXXSG1d2pGo+r0=--3Y+myeOQs4kyibFVqi36QclW1Ov7Z8w3eqiUTexWSo4=
curl --include --request POST http://localhost:3000/carts \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "cart":{
      "product": "Ocarina of Time",
      "quantity": 1
    }
  }'
