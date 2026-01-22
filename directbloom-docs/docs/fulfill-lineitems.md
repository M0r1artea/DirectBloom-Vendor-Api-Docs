---
sidebar_label: 'Fulfill Orders'
sidebar_position: 4
---

# Fulfill Orders
An endpoint for vendors to fulfill orders they received.

:::warning
These service are currently under development and subject to change. Any changes to the services will immediately be reflected here until 1st prod launch
:::

## Url - subject to change
```
https://pawuvubgj5.execute-api.us-east-1.amazonaws.com/v1/fulfill
```

## Authentication Header
Ask david@devmercs.com for your key
```
{
    "x-api-key": "XXXXXXXXXXXXXXXXXXXXXX"
}
```

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