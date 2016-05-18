TOKEN=2uZv/DLFFiz7Q99McHydpkBdpNk4mgWyqeqZ5nDhRC4=--Jjmo8HMLYj0Z2n2Y4MVXPUIvnax2OzVOseXpy080Sxg=
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
