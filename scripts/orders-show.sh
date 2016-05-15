TOKEN=kdYfjdzD4upJwjoAwGq3iCf4Wz1q0r7PDWK28Uh6dDs=--oritZauGAhtKmuB+OdZYtmIGT6HpLXc/c0HMG7MTffw=
curl --request GET http://localhost:3000/orders \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" | jsonlint
