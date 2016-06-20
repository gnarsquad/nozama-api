TOKEN=PHzUKVRt0c6qkPL+HLRTIExjoAkfm9oppHFOTh1mpxw=--gW5+20XoamOhvGTQGbn38r7Eb8tngkVpqaykkDd6kUo=
curl  --include --request GET http://localhost:3000/search \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
  "name": "cube"
}'
