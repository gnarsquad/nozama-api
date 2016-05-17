TOKEN=3rI1LrU7YI8cIp7NlJTN8Z9LmVKmu0/fShq+WKe74UM=--Ctyz0HJzG6Qx4+oSxX/0QgrVMdWKPGzreNwJajTFiJs=
curl --include --request POST http://localhost:3000/cart \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "lineItems":
        {
          "quantity": "1",
          "productid": "5739eb783e7fa5497f620d30",
          "name": "The Art of the Deal",
          "price": "1000000000",
          "image": "asdfasdf"
      }
  }'
