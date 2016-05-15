ID=
TOKEN=fkO4ic0Jci/ZnWiLrptaqL6OLHGWrq/K4DHoumCU3f8=--nfuCPufyzGuJb0pl6Gh7YhaVfmKY71r/1FnHDasSTzo=
curl --include --request POST http://localhost:3000/orders \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "order" : {
      "products": ["sample product", "another prod"]
    }
  }'
