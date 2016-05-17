# ID=57389ed4f26cbe6d1075b42f
TOKEN=3rI1LrU7YI8cIp7NlJTN8Z9LmVKmu0/fShq+WKe74UM=--Ctyz0HJzG6Qx4+oSxX/0QgrVMdWKPGzreNwJajTFiJs=
curl  --request GET http://localhost:3000/cart/show \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" | jsonlint
