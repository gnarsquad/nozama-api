# TOKEN=on2gF5//zRkF875J/XrcnsozHsJVyhfjood4FjBYs30=--jQd2azFkNcbxJi6kkzvimVKtqo4fQc8C3NzuLCO+c4I=
curl --include --request GET http://localhost:3000/orders/5738c7380819a438696bc877 \
  # --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"
