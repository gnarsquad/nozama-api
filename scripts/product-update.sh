TOKEN=''
ID=''
curl --include --request PATCH http://localhost:3000/products/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "product": {
      "type": "sorcery",
      "subtype": "transmutation",
      "name": "Horadric Cube",
      "description": "Stay a while and listen",
      "price": 6.00,
      "stock": 1,
      "image": "http://vignette2.wikia.nocookie.net/diablo/images/4/4f/Deckard_Cain_D3.jpg/revision/latest?cb=20131015114726"
    }
  }'
