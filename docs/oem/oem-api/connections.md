---
title: Workato API - Connections
date: 2019-03-21 11:20:00 Z
---

# Connections

Use the following endpoints to retrieve and create the connections that belong to an OEM customer account.

### Quick reference

<div class='api_quick_reference'></div>

| Type |Resource | Description |
|------|---------|-------------|
| GET  | [/api/managed_users/:managed_user_id/connections](#list-connections) | Returns a list of connections in OEM user's account. |
| POST | [/api/managed_users/:id/connections](#create-connections) | Allows the OEM vendor to add a shell connection in a customer's account. |

## List Connections

Returns all connections and associated data for the OEM customer account.

```
GET /api/managed_users/:managed_user_id/connections
```
### URL parameters

<div class='api_input'></div>

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/managed_users/98178/connections \
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

## Create Connection
Allows the OEM vendor to add a shell connection in a customer's account. The OEM vendor can supply a `name` (optional) and `external_id` (optional) during creation. The API doesn't allow user to provide actual credentials.

```
POST /api/managed_users/:id/connections
```

### URL parameters

<div class='api_input'></div>

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
