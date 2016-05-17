TOKEN=BAZvpD+knafEGSQSaIdRWOV5QkiOIlVkfahSZYSs/ik=--hyXagC58jzM1F4GSQfX2Oo0z4hoj348NDpFH+tWscFI=
curl --include --request POST http://localhost:3000/carts \
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
