# ID=57389ed4f26cbe6d1075b42f
TOKEN=3rmqDTxgXbot5VIsbVAXQXS9i6HnyrT/rfXLRHZ+m38=--2SqPyB+iZwK7cKwdXUOepHWLO11P12R5+iWjm368QVI=
curl  --request GET http://localhost:3000/cart \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"
