TOKEN=h92jALhP68XAo+XdFfVbu8OgCP0JovOpW1fFmVeMFh0=--+xndo7xh46unFPzNfRq6peuDO+I2HtIedn1WbrGqNQI=
curl --include --request POST http://localhost:3000/cart \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
          "quantity": "1",
          "productid": "5739eb783e7fa5497f620d30",
          "name": "The Art of the Deal",
          "price": "1000000000",
          "image": "asdfasdf"
  }'
