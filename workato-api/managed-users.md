---
title: Workato API - Managed Users
date: 2019-03-21 11:20:00 Z
---

# Managed Users
Use the following endpoints to manage OEM customers.

### Supported Formats
* JSON

### Contents
| Resource | Description |
|----------------|-------------|
|[POST /api/managed_users](#create-new-oem-customer) | Create a new OEM customer. Requires 'oem_vendor' privilege.
|[POST /api/managed_users/:id/member](#add-member-to-oem-customer-account) | Add member to the OEM customer account. Requires 'oem_vendor' privilege.
|[GET /api/managed_users/:id](#query-oem-customer-account) | Returns details of the given OEM customer account. Requires 'oem_vendor' privilege.
|[GET /api/managed_users/:id/connections](#query-oem-customer-connections)| Returns a list of connections in OEM customer's account. Requires 'oem_vendor' privilege.
|[DELETE /api/managed_users/:id/member](#remove-member-from-an-organization-account) | Deletes a member from given user's team. Requires 'oem_vendor' privilege.
|[PUT /api/managed_users/:id/upgrade](#upgrading-a-customer-account) | Upgrades the customer account from trial OR free to the plan specified in the OEM configuration.
|[PUT /api/managed_users/:id/downgrade](#downgrading-a-customer-account) | Downgrades the customer account to free plan. |

## Create new OEM customer

> POST /api/managed_users

### Description
Creates a new OEM customer account. Requires 'oem_vendor' privilege.

- The new account is assigned the plan specified in the master account's OEM configuration.
- Configures preferred authentication mode for the child account based on the value specified in the master account's OEM configuration.
- Sets the plan of the new account based on the OEM configuration.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| name | **string**<br>_required_ | Full name of the user. |
| oauth_id | **string**<br>_required_ | Identifier used for oauth. |
| notification_email | **string**<br>_required_  | Email for error notifications. |
| external_id | **string**<br>_optional_ | External identifier for the user. |

#### Example request parameters
```JSON
{
  "name": "Kevin O'Leary",
  "oauth_id": "AAA0932808240:UU0239093498",
  "notification_email": "kevinl@acme.com",
  "external_id": "UU0239093498"
}
```

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `500` | Server error |

### Examples

#### Success: EA2300
```JSON
POST /api/managed_users
{
  "id": 3498583,
  "plan_id": "oem_plan",
  "trial": false
}
```

#### Server error: 500
```JSON
{
  "message":"Server error",
  "id": "32y2298sjbjdwejweg"
}
```

## Add member to OEM customer account

> POST /api/managed_users/:id/member  

### Description
Adds a member to the OEM customer account. Requires 'oem_vendor' privilege.
- Creates a new Workato member account and makes the user member of the given customer account's team.
- Configures preferred authentication mode for the member based on the value specified in the master account's OEM configuration.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| name | **string**<br>_required_ | Full name of the user. |
| oauth_id | **string**<br>_required_ | Identifier used for oauth. |
| role_name | **string**<br>_optional_  | Membership role name. |
| external_id | **string**<br>_optional_ | External identifier for the user. |

#### Example request parameters
```json
{
  "name": "Jack Smith",
  "oauth_id": "AAA0932808240:UU0239093499",
  "role_name": "Admin",
  "external_id": "UU0239093499"
}
```

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

### Examples

#### Success: 200
```json
POST /api/managed_users/12/member
{
  "id": 3498583,
  "plan_id": "oem_plan",
  "trial": false
}
```

#### Server error: 500
```json
<pre><code style="display: block; white-space: pre-wrap;">{
  "message":"Server error",
  "id": "32y2298sjbjdwejweg"
}
```

## Query OEM customer account

> GET /api/managed_users/:id

### Description
Returns details of the given OEM customer account. Requires 'oem_vendor' privilege.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **string**</br>_required_ | OEM user Account ID/External ID. External should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

### Examples

#### Success: 200

```json
{
    "id": 4676,
    "name": "Customer A",
    "notification_email": "customer-a@a.com",
    "plan_id": "business_yearly",
    "in_trial": false,
    "created_at": "2019-07-11T10:08:41.693-07:00",
    "updated_at": "2019-07-11T10:22:35.132-07:00"
}
```

## Query OEM customer connections

> GET /api/managed_users/:id/connections

### Description
Returns a list of connections in OEM customer's account. Requires 'oem_vendor' privilege.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **string**<br>required | OEM user account ID/external ID. External should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

### Examples

#### Success: 200

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

## Remove member from an organization account

> DELETE /api/managed_users/:id/member

### Description
Deletes a member from given user's team. Requires 'oem_vendor' privilege.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| id | **interger**<br>_required_ | OEM member ID.<br>**Example:** */api/managed_users/3485434779/member* |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

### Examples

#### Success: 200
```json
{
  "id": 3485434779
}
```

## Upgrading a customer account

> PUT /api/managed_users/:id/upgrade

### Description
Upgrades the customer account from trial OR free to the plan specified in the OEM configuration.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| id | **integer**</br>required | OEM customer ID.<br/>**Example:** */api/managed_users/3485434779/upgrade* |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

### Examples

#### Success: 200
```json
{
  "id": 3498583,
  "plan_id": "oem_enterprise",
  "trial": false
}
```

## Downgrading a customer account

> PUT /api/managed_users/:id/downgrade

### Description
Downgrades the customer account to free plan.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| id | **integer**<br>_required_ | OEM customer ID.<br/>**Example:** */api/managed_users/3485434779/downgrade* |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

### Examples

#### Success: 200
```json
{
  "id": 3498583,
  "plan_id": "free",
  "trial": false
}
```
