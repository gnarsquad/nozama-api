ID=57389ed4f26cbe6d1075b42f
TOKEN=yKivGYuJHFCMLLpcRWujnRu+DEaeFPC7stAUf42+tHI=--VLzB6cO3bnPs02adMDx48A0MaaISTJz/ge/CiahXQYg=
curl --include --request PATCH http://localhost:3000/carts \
     --header "Authorization: Token token=$TOKEN" \
     --data '{
       "productid":"5739eb783e7fa5497f620d30"
     }'
