# ID=57389ed4f26cbe6d1075b42f
TOKEN=8mLCxcZPd5+BoG/JlJYk27xo9z5NZng3EzSEU2w1WFw=--mNkxnBIqs93V8JPJim8ofd64wfcjpRSrb8X0Tq/RhVI=
curl  --request GET http://localhost:3000/carts \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" |jsonlint
