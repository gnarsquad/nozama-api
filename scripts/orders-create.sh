TOKEN=v16HfMCUkVIq2nyrAK59+4hyXk7ukyIz6yFLCtoJjr8=--q/ShfLmxanmARwy6dU1VIFHPYKhonmCroUaqlNPrbVo=
curl --include --request POST http://localhost:3000/orders \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "order" : {
      "product": "aadf",
      "quantity": 1
    }
  }'
