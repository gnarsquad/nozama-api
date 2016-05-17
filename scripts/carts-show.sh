# ID=57389ed4f26cbe6d1075b42f
TOKEN=srqrHUPWIBFSPCNJcMhpPiGSQwP9Ib/Lsf3SEgz2EHQ=--QuCpims1CjtJ3cwE7aExkPCy5+od85iA362rqWgLyDg=
curl  --request GET http://localhost:3000/cart/show \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" |jsonlint
