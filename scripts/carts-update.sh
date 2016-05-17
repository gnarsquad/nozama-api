ID=57389ed4f26cbe6d1075b42f
TOKEN=JmTKVhjHlvw9JeM2llTZsPA9zM/x/gWe4uxs5NZYjxw=--m2NrkL/xwOnYJhHWKoYZda7ke+fx4M7Qaeil7A0W3oI=
curl --include --request DELETE http://localhost:3000/cart \
     --header "Authorization: Token token=$TOKEN" \
     --header "Content-Type: application/json" \
     --data '{
         "productid": "5739eb783e7fa5497f620d36"
     }'
