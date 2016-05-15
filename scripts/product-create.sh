TOKEN=''
curl --include --request POST http://localhost:3000/products \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "product": {
      "type": "book",
      "subtype": "fiction",
      "name": "The Art of the Deal",
      "description": "This book is tremendous",
      "price": 1000000000.00,
      "stock": 5,
      "image": "http://ecx.images-amazon.com/images/I/516W6PY-hvL._SX300_BO1,204,203,200_.jpg"
    }
  }'
