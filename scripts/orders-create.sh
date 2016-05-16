TOKEN="2a4CTcSPtFvk8imstqtqmayTZOGtKtnpp10z8o0TTMs=--AH7GSLohUWDOvjgHr4mIWhZyZk98DVv8gxg/jbcmZ+I="
curl --include --request POST http://localhost:3000/orders \
  --header "Authorization: Token token=FN5SBii9hY3fM+g+HP17IrnynjBl4QlkP2j03kKtjmw=--dgvZKWW04tH1AoNKf7NSgfQVOVGPHzIkaS6UBQPrtXo=" \
  --header "Content-Type: application/json" \
  --data '{
      "lineItems": [ "product": {
        "quantity": 1,
        "id": 5739e0664cda762711df99c2,
        "name": "The Art of the Deal",
        "price": 1000000000,
      }
    ]
  }'


  curl --include --request POST http://localhost:3000/orders \
    --header "Content-Type: application/json" \
    --data '{
      "lineItems": [
        "product": {
          "quantity": 1,
          "id": "5739e0664cda762711df99c2",
          "name": "The Art of the Deal",
          "price": 1000000000,
        }
        ]
    }'
