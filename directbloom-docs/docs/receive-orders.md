---
sidebar_label: 'Receive Orders'
sidebar_position: 6
---

# Receive Orders

When a customer places an order on DirectBloom, they are able to add products from multiple vendors. Kennicott has
provided a service that will separate the line items by vendor and send those orders to the vendors respectively. This 
document explains the payload a vendor should expect to receive as well as how to register their endpoint to receive
that payload.

:::warning
These service are currently under development and subject to change. Any changes to the services will immediately be reflected here until 1st prod launch
:::

## Registration
Kennicott will need to know the url as well as authorization information to send orders. Please provide the url, the
type of authorization (AccessToken or Username/Password) and the header keys they are supposed to be sent in to
david@devmercs.com when your endpoint is ready to test.

## Request Headers
Vendor opted to use "access-token" as their authorization header 

```
{
    "access-token": "XXXXXXXXXXXX"
}
```
Vendor opted to use "username" and "password" as their authorization headers
```
{
    "username": "XXXXXXXXXXXX",
    "password": "XXXXXXXXXXXXX",
}
```

## Shipping Method Names
Below are possible shipping method identifiers
```
FEDEX_2_DAY
FEDEX_2_DAY_AM
KENNICOTT BROS - INDIANAPOLIS
KENNICOTT BROS - CHICAGO
DIRECTBLOOM INDIANAPOLIS
DIRECTBLOOM CHICAGO
DIRECTBLOOM CLEVELAND
DIRECTBLOOM ALSIP
DIRECTBLOOM DAYTON
DIRECTBLOOM SOUTH BEND
DIRECTBLOOM ELK GROVE VILLAGE
DIRECTBLOOM DORAVILLE
DIRECTBLOOM WARREN
DIRECTBLOOM MILWAUKEE
DIRECTBLOOM GRND RAPIDS
DIRECTBLOOM TWIN CITIES
DIRECTBLOOM TAMPA
DIRECTBLOOM PITTSBURGH
```

## Request Body
```
{
  "version": "1.0",
  "order_id": 1111111111111,
  "order_number": "XXXXXX",
  "vendor": "Test Vendor",
  "currency": "USD",
  "price": "63.70",
  "ship_to": {
    "name": "Test Company",
    "address1": "1700 W Grand Ave",
    "address2": null,
    "city": "Chicago",
    "province": "IL",
    "postal_code": "60622",
    "country": "US",
    "phone": "+19182316958"
  },
  "shipping_method": {
    "name": "FEDEX_2_DAY",
    "account": "116782936",
    "hold_at_location": "N",
    "service_type": "1",
    "payment_type": "3",
    "contact": "Blossom Events & Florist"
  },
  "delivery_date": "2025-12-17",
  "ship_date": "2025-12-15",
  "line_items": [
    {
      "line_item_id": 16585974841657,
      "sku": "99001423",
      "product_id": 9954421408057,
      "variant_id": 51082825433401,
      "title": "Hydrangea Lime Green Premium",
      "quantity": 1,
      "grams": 4480,
      "price": "63.70",
      "properties": {
        "item_price": "1.80",
        "box_type": "QB",
        "units_per_box": "25",
        "available_from": "2025-11-12",
        "available_to": "2026-01-06"
      }
    }
  ]
}
```

## Expected Response
Please respond with a status code of 200 if successful

## Error Handling
Please provide details on the error occurred using standardized Rest API status codes. 
ie: Unauthorzied/Forbidden for auth errors, Bad Request for payload processing, and 500s for internal errors
