---
title: Workato OEM API - Folders
date: 2019-03-21 11:20:00 Z
---

# Folders

Use the following endpoint to create a folder in an OEM customer account.

## Create folder

Creates a new folder in OEM user's account. Only root level folders can be created (ie. no nested folders).

```
POST /api/managed_users/:id/folders
```
### URL Parameters

<div class='api_input'></div>

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |

### Query parameters

<div class='api_input'></div>

| Name | Type | Description |
|------|------|-------------|
| folder_name | **string**<br>_required_ | Name of the folder. |

#### Sample request

```shell
curl  -X POST https://www.workato.com/api/managed_users/91892/folders \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
  "id": 3498583,
}
```
