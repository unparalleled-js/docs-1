---
title: Workato API - Managed Users
date: 2019-03-21 11:20:00 Z
isTocVisible: true
---

# Managed Users

All API endpoints listed here requires `oem_vendor` privilege. Talk to your Workato representative to enable this privilege in your account.

### Quick reference

| Type | Resource | Description |
|------|----------|-------------|
|POST | [/api/managed_users](#create-new-oem-customer) | Create customer account. |
|GET | [/api/managed_users/:id](#query-oem-customer-account) | Get customer account. |
|PUT | [/api/managed_users/:id/upgrade](#upgrading-a-customer-account) | Upgrade customer account. |
|PUT | [/api/managed_users/:id/downgrade](#downgrading-a-customer-account) | Downgrade customer account. |
|POST | [/api/managed_users/:id/member](#add-member-to-oem-customer-account) | Add member to customer account. |
|DELETE | [/api/managed_users/:id/member](#remove-member-from-an-organization-account) |  Remove member from customer account. |
|GET | [/api/managed_users/:id/connections](#query-oem-customer-connections)| List customer connections. |

### HTTP response codes

| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

## Create customer account

Create a new OEM customer account.

```
POST /api/managed_users
```

### Request body

| Name | Type | Description |
| --- | --- | --- |
| name | **string**<br>_required_ | Full name of the user. |
| notification_email | **string**<br>_required_  | Email for error notifications. |
| plan_id | **string**<br>_optional_ | Plan id. Default plan id is used when not provided. |
| external_id | **string**<br>_optional_ | External identifier for the OEM customer. |

#### Sample request

```JSON
{
  "name": "Kevin O'Leary",
  "notification_email": "kevinl@acme.com",
  "external_id": "UU0239093498"
}
```

### Response

```JSON
{
  "id": 3498583,
  "plan_id": "oem_plan",
  "trial": false
}
```

## Get customer account

Get OEM customer account details.

```
GET /api/managed_users/:id
```

### URL Parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **string**<br>_required_ | OEM customer Account ID/External ID. External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Response

```json
{
    "id": 4676,
    "exteranl_id": "A298247",
    "name": "Customer A",
    "notification_email": "customer-a@a.com",
    "plan_id": "business_yearly",
    "in_trial": false,
    "created_at": "2019-07-11T10:08:41.693-07:00",
    "updated_at": "2019-07-11T10:22:35.132-07:00"
}
```

## Upgrade customer account

Upgrade OEM customer account from trial OR free plan.

```
PUT /api/managed_users/:id/upgrade
```

### URL parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **string**<br>_required_ | OEM customer Account ID/External ID. External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Request body

| Name | Type | Description |
| --- | --- | --- |
| plan_id | **string**<br>_optional_ | Plan id. Default plan id is used when not provided. |

### Response

```json
{
  "id": 3498583,
  "plan_id": "oem_enterprise",
  "trial": false
}
```

## Downgrade customer account

Downgrade OEM customer account to free plan.

```
PUT /api/managed_users/:id/downgrade
```

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| id | **integer**<br>_required_ | OEM customer ID.<br/>**Example:** */api/managed_users/3485434779/downgrade* |

### Response

```json
{
  "id": 3498583,
  "plan_id": "free",
  "trial": false
}
```

## Add member to customer account

Add a member to the OEM customer account.

```
POST /api/managed_users/:id/member
```

### URL Parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **string**<br>_required_ | OEM customer Account ID/External ID. External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Request body

| Name | Type | Description |
| --- | --- | --- |
| name | **string**<br>_required_ | Full name of the user. |
| oauth_id | **string**<br>_required_ | Identifier used for oauth. |
| role_name | **string**<br>_optional_  | Role name. |
| external_id | **string**<br>_optional_ | External identifier for the member. |

#### Sample request

```json
{
  "name": "Jack Smith",
  "oauth_id": "AAA0932808240:UU0239093499",
  "role_name": "Admin",
  "external_id": "UU0239093499"
}
```

### Response

```json
{
  "id": 3498583,
  "plan_id": "oem_plan",
  "trial": false
}
```

## Remove member from customer account

Remove a member from the OEM customer's account.

```
DELETE /api/managed_users/:id/member
```

### URL Parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **string**<br>_required_ | OEM customer Account ID/External ID. External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Response

```json
{
  "id": 3485434779
}
```

## List customer connections

Get the list of connections in OEM customer's account.

```
GET /api/managed_users/:id/connections
```

### URL Parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **string**<br>_required_ | OEM customer Account ID/External ID. External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Response

```json
{
  "result": [
    {
      "id": 6132,
      "name": "My Box account",
      "provider": "box",
      "authorization_status": "success",
      "authorized_at": "2019-09-10T18:20:08.854-07:00",
      "created_at": "2019-09-10T18:19:57.437-07:00",
      "updated_at": "2019-09-10T18:20:08.859-07:00"
    },
    {
      "id": 6131,
      "name": "My Salesforce account",
      "provider": "salesforce",
      "authorization_status": "success",
      "authorized_at": "2019-09-10T18:19:43.018-07:00",
      "created_at": "2019-09-10T18:19:12.902-07:00",
      "updated_at": "2019-09-10T18:19:43.021-07:00"
    }
  ]
}
```
