TOKEN="2a4CTcSPtFvk8imstqtqmayTZOGtKtnpp10z8o0TTMs=--AH7GSLohUWDOvjgHr4mIWhZyZk98DVv8gxg/jbcmZ+I="
curl --include --request POST http://localhost:3000/orders \
  --header "Authorization: Token token=DnBdbZ8ZG+i39Rz6244rFy4YoEnDJ2vtFljq1YsNGu8=--Epl+j/9TQ3n3YwOuhYPGwgXqI+BCbhsUOMDA4egoJs4=" \
  --header "Content-Type: application/json" \
  --data '{
    "_owner": "57389ed4f26cbe6d1075b42f",
    "lineItems": [{
        "product": {
          "quantity": "1",
          "productid": "5739eb783e7fa5497f620d30",
          "name": "The Art of the Deal",
          "price": "1000000000"
        }
      }]
  }'



  curl --include --request POST http://localhost:3000/orders \
    --header "Content-Type: application/json" \
    --data '{
        "product": {
          "quantity": 1,
          "id": "5739e0664cda762711df99c2",
          "name": "The Art of the Deal",
          "price": 1000000000
        }
    }'
