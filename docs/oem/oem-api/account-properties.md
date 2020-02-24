---
title: Workato API - Account properties
date: 2019-03-21 11:20:00 Z
---

# Account properties

All API endpoints listed here requires `oem_vendor` privilege. Talk to your Workato representative to enable this privilege in your account.

## List properties belonging to a customer by prefix

Returns a list of account properties belonging to a customer account that matches a prefix. For example, if the prefix provided is `salesforce_sync.`, any account property with a name **beginning** with 'salesforce_sync.' will be returned.

```
GET /api/managed_users/:managed_user_id/properties
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| param | **string**<br>_required_ | Return properties with the given prefix. E.g: `salesforce_sync.`.  |
{.api-input}

#### Sample request

```shell
curl  -X GET http://www.workato.com/api/managed_users/19029/properties?param=salesforce_sync. \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/json' \
```

### Response

```json
[
  {
    "name": "salesforce_sync.object_name",
    "value": "Account"
  },
  {
    "name": "salesforce_sync.object_field",
    "value": "Id"
  }
]
```

## Upsert properties by name
Upserts account properties to a customer account. Matches by the names of the properties provided in the request.

```
POST /api/managed_users/:managed_user_id/properties
```
### Parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
{.api-input}

### Body
| Name | Type | Description |
|------|------|-------------|
| properties | **Hash**<br>_required_ | Contains the names and values of the properties to upsert. |
{.api-input}

#### Sample request

```shell
curl  -X GET http://www.workato.com/api/managed_users/19029/properties?param=salesforce_sync \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/json' \
      -d '{ "properties": { "zendesk_sync.object", "value": "Ticket" }, { "zendesk_sync,primarykey", "value": "ticket_id" }}'
```

### Response

```json
{
  "saved_property_count": 2
}
```
