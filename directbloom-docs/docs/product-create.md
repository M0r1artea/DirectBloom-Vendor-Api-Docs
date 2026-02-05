---
sidebar_label: 'Product Create'
sidebar_position: 3
---

# Product Update API Documentation

This API allows vendors to add products to the Shopify catalog.

## 1. Authentication
All requests must be made via an authorized gateway. Your `vendor_name` is automatically extracted from your API credentials. All created products through this request will be mapped to your vendor account, ensuring purchase updates.
Email `david@devmercs.com` for your access token.

:::warning
These service are currently under development and subject to change. Any changes to the services will immediately be reflected here until 1st prod launch
:::

---

## 2. Endpoint Specifications
- **Method:** `POST`
- **Url:** `https://44s4ng9bf6.execute-api.us-east-1.amazonaws.com/v1/product`
- **Content-Type:** `application/json`
- **Header:** `x-api-key: {accessToken}`

---

## 3. Request Body Definition

The request body is a JSON object. Fields marked with a `*` are optional; if omitted, the existing value in Shopify will remain unchanged **unless otherwise noted**.

### 3.1 Top-Level Fields

| Field                    | Type                        | Required   | Description                                                        |
|:-------------------------|:----------------------------|:-----------|:-------------------------------------------------------------------|
| `title`                  | String                      | Yes        | The public title of the product.                                   |
| `descriptionHTML`        | String*                     | No         | The product description in HTML format.                            |
| `type`                   | String                      | Yes        | Product category (e.g., "Flowers", "Greenery").                    |
| `published_status`       | String                      | Yes        | Set to `ACTIVE` or `DRAFT`.                                        |
| `sku`                    | String                      | Yes        | Vendor identifier for referencing product attributes in the future |
| `price`                  | String                      | Yes        | Vendor price of the product                                        |
| `inventory_quantities`   | Array[Inventory Quantity]*  | No         | Array of inventory amounts per location                            |
| `images`                 | Array[Str]                  | Yes        | A list of direct image URLs.                                       |
| `metafields`             | Object                      | Yes        | Custom attributes (specifications, origins, etc.).                 |

---

## 4. Sub-Object Definitions

###  4.1 Inventory Quantity
The location ID must be a valid Shopify Location GID or ID. `inventory_quantities` are optional on product create.

:::info
set "107939791161" in location for Miami
:::

| Field                  | Type                       | Required | Description                                                  |
|:-----------------------|:---------------------------|:---------|:-------------------------------------------------------------|
| `location`             | String                     | Yes      | Location Id where inventory is located. **Use 107939791161** |
| `quantity`             | Int                        | Yes      | Number of products ready to purchase                         |


```json
    "inventory_quantities": [
      {
        "location": "107939791161",
        "quantity": 250
      }
    ]
```
### 4.2 Metafields
The metafields object contains specific product data.

| JSON Key                | Data Type | Description                                  | Notes      |
| :---------------------- |:----------| :------------------------------------------- |------------|
| `available_from`        | String    | The start date of product availability.      | YYYY-MM-dd |
| `available_to`          | String    | The end date of product availability.        | YYYY-MM-dd |
| `color`                 | String    | Primary color of the item.                   |            |
| `grade`                 | String    | The quality grade (e.g., "A1", "Select").    |            |
| `stems_per_bunch`       | String    | Number of stems per individual bunch.        |            |
| `units_per_box`         | String    | Total units contained in a single box.       |            |
| `box_type`              | String    | The physical type of packaging used.         |            |
| `bunches_per_box`       | String    | Total number of bunches inside one box.      |            |
| `total_units_per_box`   | String    | Total quantity of units per shipping box.    |            |
| `category`              | String    | Product classification.                      |            |
| `supplier_product_code` | String    | Vendor internal SKU or reference code.       |            |
| `is_available`          | Boolean   | Global availability toggle (`true`/`false`). |            |
| `item_price`            | String    | The price per individual unit.               |            |
| `shipping_weight`       | String    | Weight used for shipping calculations.       |            |
| `box_dimensions`        | String    | Length x Width x Height of the box.          |            |
| `variety`               | String*   | The specific variety or cultivar name.       |            |
| `grower_origin_code`    | String*   | Reference code for the farm or origin.       |            |

#### Example
```json
"metafields": {
  "available_from": "2024-02-01",
  "available_to": "2024-06-01",
  "color": "Soft Pink",
  "grade": "Select",
  "stems_per_bunch": "10",
  "units_per_box": "100",
  "box_type": "QB",
  "bunches_per_box": "10",
  "total_units_per_box": "100",
  "category": "Roses",
  "supplier_product_code": "VND-ROS-001",
  "is_available": true,
  "item_price": "1.25",
  "shipping_weight": "12.5kg",
  "box_dimensions": "40x20x20",
  "variety": "Pink Mondial",
  "grower_origin_code": "EC-042"
}
```

---

## 5. Full Example Request
```json
{
  "product_id": "10105035653433",
  "title": "Fresh Cut Red Roses",
  "description_html": "<h1>Premium Quality</h1><p>Fresh roses from our fields.</p>",
  "type": "Flowers",
  "published_status": "ACTIVE",
  "sku": "SKU-ROSE-RED-STD",
  "price": "19.99",
  "inventory_quantities": [
    {
      "location": "107939791161",
      "quantity": 100
    }
  ],
  "images": [
    "[https://example.com/images/roses-hero.jpg](https://example.com/images/roses-hero.jpg)",
    "[https://example.com/images/roses-detail.jpg](https://example.com/images/roses-detail.jpg)"
  ],
  "metafields": {
    "available_from": "2024-02-01",
    "available_to": "2024-06-01",
    "color": "Soft Pink",
    "grade": "Select",
    "stems_per_bunch": "10",
    "units_per_box": "100",
    "box_type": "QB",
    "bunches_per_box": "10",
    "total_units_per_box": "100",
    "category": "Roses",
    "supplier_product_code": "VND-ROS-001",
    "is_available": true,
    "item_price": "1.25",
    "shipping_weight": "12.5kg",
    "box_dimensions": "40x20x20",
    "variety": "Pink Mondial",
    "grower_origin_code": "EC-042"
  }
}
```

---

## 6. Response Codes & Troubleshooting
- **200 OK:** The product update and all background tasks (inventory/media) succeeded.
```json
    {
        "message": "Product update sequence complete",
        "product_id": "###########"
    }
```
- **400 Bad Request:** Malformed JSON or missing product_id.
- **401 Unauthorized:** Credentials missing or vendor context not found.
- **403 Forbidden:** You do not have ownership of this product_id.
- **500 Error:** Check if your image URLs are publicly accessible and if your SKUs match existing Shopify variants.