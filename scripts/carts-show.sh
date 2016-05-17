# ID=57389ed4f26cbe6d1075b42f
TOKEN=X3MaNBS5TvOjzbOFKMMQf34QKod3bwFOEGWAThARn+Q=--BXLcd9PXxCWTV+8U3DTz7gbYMAeM6XI+gOkGHnQ3CBM=
curl  --request GET http://localhost:3000/carts/show \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" |jsonlint
