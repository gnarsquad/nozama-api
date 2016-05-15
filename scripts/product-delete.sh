TOKEN='plrGs2I8oksJ2TKdpXceVW2NVLd7dm+Ih5Uq6AdFtcw=--bSxEWoIKwLYZNsHGWsbPSje0wAJUyRr33L00y+XW8sY='
ID='5738d378725e60465b5ddb74'
curl --include --request DELETE http://localhost:3000/products/$ID \
     --header "Authorization: Token token=$TOKEN" \
