const shoppingcart_schema = {
    
        "type": "object",
        "properties": {
          "products": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "cart_id": { "type": "string" },
                "product_id": { "type": "string" },
                "name": { "type": "string" },
                "model": { "type": "string" },
                "option": {
                  "type": "array",
                  "items": { "type": "string" }
                },
                "quantity": { "type": "string" },
                "stock": { "type": "boolean" },
                "shipping": { "type": "string" },
                "price": { "type": "string" },
                "total": { "type": "string" },
                "reward": { "type": "number" }
              },
              "required": [
                "cart_id",
                "product_id",
                "name",
                "model",
                "option",
                "quantity",
                "stock",
                "shipping",
                "price",
                "total",
                "reward"
              ]
            }
          },
          "vouchers": {
            "type": "array",
            "items": {},
            "default": []
          },
          "totals": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": { "type": "string" },
                "text": { "type": "string" }
              },
              "required": ["title", "text"]
            }
          }
        },
        "required": ["products", "vouchers", "totals"]
      
    
}

module.exports = {
    shoppingcart_schema
}