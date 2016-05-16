TOKEN='yazHjHYv6dMsd6V7LGWnCzKAVftczyNKoI8oiCFylbA=--9HNGPfwBMOobwUJ8BsP33EraxVB+H36+/ThstJ+8uw0='
ID='5739e0664cda762711df99c2'
curl --include --request DELETE http://localhost:3000/products/$ID \
     --header "Authorization: Token token=$TOKEN" \
