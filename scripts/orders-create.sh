TOKEN=/Ym/jj6Zaw4x3LMmq+I+cEn4netydNw1w1VZLvE3C2s=--l28q9V+1pm/thGNYiCp8emMcngHGLW8UsRvOcX97xVk=
curl --include --request POST http://localhost:3000/orders \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "order" : {
      "product": {
        "quantity": 1,
        "id":    ,
        "name":   ,
        "price":   ,
      }
    }
  }'
