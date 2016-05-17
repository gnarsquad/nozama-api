TOKEN=OjYEBtBshKr+Zo8jjJ/IpkNILFYa/Vhx03c6TIC3BdU=--/9Boa3DVOnSCdGBM1aNNvbnmkGu5BVEbpBQzgXYiZoc=
curl --include --request PATCH http://localhost:3000/cart \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "productid": "5739eb783e7fa5497f620d30",
    "quantity": 2
  }'
