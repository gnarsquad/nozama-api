ID:"573b6c6cdf33bdfb8b798bde"
TOKEN:"ACNpND2FlyLJD7djMq8RqG6NH0i2lCF7fyiUjPb/+MA=--dyFpbxuB5PAXDghlBSp/vaboqfM7LFDhGpO0afB9agY="
curl --include --request PATCH http://localhost:3000/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "a"
    }
  }'
