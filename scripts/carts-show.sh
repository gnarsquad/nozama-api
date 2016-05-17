# ID=57389ed4f26cbe6d1075b42f
TOKEN=dtNApAcyOvEJNRalJDWr6SMQERK54thaoJIrX5zd5H4=--SZ3Jw0JJU27IkCRI1SuwniOPjAGkDqKqOqrDBeeKwC8=
curl  --request GET http://localhost:3000/cart/show \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"
