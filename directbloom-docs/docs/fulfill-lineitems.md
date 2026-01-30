---
sidebar_label: 'Fulfill Orders'
sidebar_position: 4
---

# Fulfill Orders
An endpoint for vendors to fulfill orders they received.

## 1. Authentication
All requests must be made via an authorized gateway. Your `vendor_name` is automatically extracted from your API credentials. You are only permitted to update products that are explicitly assigned to your vendor account in Shopify.
Email `david@devmercs.com` for your access token.

:::warning
These service are currently under development and subject to change. Any changes to the services will immediately be reflected here until 1st prod launch
:::

##  2. Endpoint Specifications
- **Method:** `POST`
- **Url:** `https://44s4ng9bf6.execute-api.us-east-1.amazonaws.com/v1/fulfill`
- **Content-Type:** `application/json`
- **Header:** `x-api-key: {accessToken}`

## Request Body
```
{
    "order_id": "XXXXXXXXXXXXXX",
    "line_items": [
        {
            "line_item_id": "XXXXXXXXXXXXXXXXX",
            "quantity": XX
        }
    ],
    "tracking_info": [
        {
            "tracking_number": "XXXXXXXXXXXXXXXX",
            "tracking_company": "XXXXXXXX",
            "tracking_url": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        }
    ]
}
```