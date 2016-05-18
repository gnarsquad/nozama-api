ID=573ba2a69312898ea6ed35a3
TOKEN=2uZv/DLFFiz7Q99McHydpkBdpNk4mgWyqeqZ5nDhRC4=--Jjmo8HMLYj0Z2n2Y4MVXPUIvnax2OzVOseXpy080Sxg=
curl  --include --request GET http://localhost:3000/user_cart \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json"
