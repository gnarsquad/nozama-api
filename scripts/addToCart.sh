ID=57389ed4f26cbe6d1075b42f
TOKEN=b+RRi6FtwSLec7ryTa9+eJLpqVeyZ7EmSrTCCpKzDMQ=--K063yR6PavKLfTZZAK0Z7YOCvJ4uBC1n03oDk8ywW3M=
curl --include --request POST http://localhost:3000/additem \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "lineItems": {
          "quantity": "1",
          "productid": "5739eb783e7fa5497f620d30",
          "name": "The Art of the Deal",
          "price": "1000000000"
      }
  }'
