TOKEN=DVcEfaALnW5By1RZt2fG9IV/21bkU6o4R4ptcAEGYrg=--9tnAdtyV3rHNZGQu89+q0JF6wwHfVHofTf0IFlfaJjk=
curl --include --request POST http://localhost:3000/orders \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "order" : {
      "products": ["sample product", "another prod"]
    }
  }'
