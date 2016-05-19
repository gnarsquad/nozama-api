TOKEN=DnBdbZ8ZG+i39Rz6244rFy4YoEnDJ2vtFljq1YsNGu8=--Epl+j/9TQ3n3YwOuhYPGwgXqI+BCbhsUOMDA4egoJs4=
curl --request GET http://localhost:3000/orders \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" | jsonlint
