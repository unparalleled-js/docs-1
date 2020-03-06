---
title: Workato API - Adapters
date: 2019-03-21 11:20:00 Z
---

# Connectors

All API endpoints listed here requires `oem_vendor` privilege. Talk to your Workato representative to enable this privilege in your account.

## List Connector Metadata

Returns a list of connectors and associated metadata specified in the API request.

```
GET /api/integrations
```

### Request body

| Name | Type | Description |
|------|------|-------------|
| applications | **string**<br>_required_ | Comma separated connector identifiers. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET http://www.workato.com/api/integrations \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/json' \
      -d '{
            "applications": "salesforce,service_now"
          }'
```

### Response

```json
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
