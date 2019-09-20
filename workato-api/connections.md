---
title: Workato API - Connections
date: 2019-03-21 11:20:00 Z
---

# Connections
Use the following endpoints to retrieve the connections that belong to a user.

## Supported Formats
* JSON

## List Connections

> GET /api/connections  

### Description
Returns all connections and associated data for the Workato user specified in the query parameters or in the request headers of the API request.

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `401` | Unauthorized |
| `500` | Server error |

### Examples

#### Success: 200
```JSON
GET /api/connections
200
[
  {
    "application": "Salesforce",
    "id": 36,
    "name": "ACME Production Salesforce connection",
    "description": null,
    "authorized_at": "2015-05-26T22:53:52.528Z",
    "authorization_status": "success",
    "authorization_error": null,
    "created_at": "2015-05-26T22:53:52.532Z",
    "updated_at": "2015-05-26T22:53:52.532Z"
  }
]
```
