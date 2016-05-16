TOKEN='RxyaIANUXBlwEPgIiqnvlY2znOKRs8nMn/Yy10DxS4I=--QL8SQh40wkxWlVcSABi9ts8zvithDW4mGbrmcw3ZpKA='
ID='5739de8e4cda762711df99c1'
curl --include --request DELETE http://localhost:3000/products/$ID \
     --header "Authorization: Token token=$TOKEN" \
