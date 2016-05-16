ID=57389ed4f26cbe6d1075b42f
TOKEN=J0q0lxZr4KMz+nh5QigGeeG55u09CVLfMOkYTQZb8mY=--vlgKaY65kgV24+OTF51kNr+gkPvnljDjTz/rlW5cFNQ=
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
