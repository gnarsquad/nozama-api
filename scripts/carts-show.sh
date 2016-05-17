# ID=57389ed4f26cbe6d1075b42f
TOKEN=JhymGiLH/daz+8JzjjsC4e0OeUcbYEfUwkGnIeD3kTw=--a/4HOToMHcEmjAUpK2Ed2Wsnvls9LALcFbN3KaiWQNM=
curl  --request GET http://localhost:3000/carts/show \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" |jsonlint
