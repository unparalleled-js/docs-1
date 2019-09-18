---
title: Workato API - Adapters
date: 2019-03-21 11:20:00 Z
---

# Adapters
Use the following endpoints to retrieve the metadata of connectors in Workato.

### Supported Formats
* JSON

## List Connector Metadata

> GET /api/integrations

### Description
Returns a list of connectors and associated metadata specified in the query parameters or in the request headers of the API request. Requires 'oem_vendor' privilege.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| applications | **string**<br>_required_ | Comma separated connector identifiers (e.g: salesforce,service_now). |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `401` | Unauthorized |
| `500` | Server error |

### Examples

#### Success: 200

```JSON
GET /api/adapters
200
[
  {
    "name": "salesforce",
    "title": "Salesforce",
    "image_url": "http://www.example.com/assets/adapters/salesforce_logo.png",
    "mobile_image_url": "http://www.example.com/assets/adapters/mobile/salesforce_logo.png",
    "requires_connection": true,
    "mobile_search": false
  },
  {
    "name": "service_now",
    "title": "Service Now",
    "image_url": "http://www.example.com/assets/adapters/service_now.png",
    "mobile_image_url": "http://www.example.com/images/adapters/servicenow.png",
    "requires_connection": true,
    "mobile_search": true
  }
]
```
