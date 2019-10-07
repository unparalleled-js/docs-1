---
title: Workato API - Connections
date: 2019-03-21 11:20:00 Z
isTocVisible: true
---

# Connections

Use the following endpoints to retrieve the connections that belong to a user.

## List Connections

Returns all connections and associated data for the authenticated Workato user.

```
GET /api/connections
```

#### Sample request

```shell
curl  -X GET http://workato.com/api/connections \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
[
  {
    "application": "salesforce",
    "id": 36,
    "name": "ACME Production Salesforce connection",
    "description": null,
    "authorized_at": "2015-05-26T22:53:52.528Z",
    "authorization_status": "success",
    "authorization_error": null,
    "created_at": "2015-05-26T22:53:52.532Z",
    "updated_at": "2015-05-26T22:53:52.532Z"
  },
  {
      "application": "google_sheets",
      "id": 37,
      "name": "ACME google sheet account",
      "description": null,
      "authorized_at": "2015-05-26T22:53:52.528Z",
      "authorization_status": "success",
      "authorization_error": null,
      "created_at": "2015-05-26T22:53:52.532Z",
      "updated_at": "2015-05-26T22:53:52.532Z"
  }
]
```
