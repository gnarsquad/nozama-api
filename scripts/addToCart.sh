TOKEN=gcullb0HDwLXbLVJdVBElPbr3AWZ6q0FYn1QnSPhqBg=--Z9/INpflpnXvct/tuhvS6dae7ZdmBNv21cytRJen33o=
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
      },
      {
        "quantity": "1",
        "productid": "5739eb783e7fa5497f620d36",
        "name": "Parachute Pants",
        "price":  54,
        "image": "asdfasdf"
      }
  }'
