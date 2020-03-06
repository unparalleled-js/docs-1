---
title: Workato OEM API - Recipe lifecycle management
date: 2020-01-04 11:00:00 Z
---

# Recipe lifecycle management

The endpoints listed below are OEM vendor only endpoints for importing a package into a customer account.

The APIs for exporting a package are available [here](/workato-api.md#recipe-lifecycle-management). If you wish to import packages into your own environments (not customer accounts), please use the endpoints listed in the Workato API page as well.

### Quick reference

| Type | Resource | Description |
|------|----------|-------------|
| POST | [api/managed_users/:id/imports](#import-package-into-a-customer-account) | Import package into a folder in a customer account. |
| GET  | [api/managed_users/:id/recipes](#get-package-status) | Get status of an imported package. |
{: .api-quick-reference :}

## Import package into a customer account

Import a package into a specified folder in a customer account.

```
POST /api/managed_users/:id/imports
```

This is an asynchronous request. Use the [Get package status](#get-package-status) endpoint to get details of the imported the package.

The input (zip file) is a `application/octet-stream` payload containing package content. URL parameter **restart_recipes** should be set to `true` if the running recipes need to be restarted upon import.

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id   | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| folder_id   | **string**<br>_required_ | Folder ID. |
| restart_recipes | **boolean**<br>_optional_ | If `true`, it will allow the restarting of running recipes. |
{: .api-input :}

#### Sample request

```shell
curl  -X POST https://www.workato.com/api/managed_users/91928/imports?folder_id=1827 \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/octet-steam' \
      -F 'path/to/local/file.zip'
```

### Response

```json
{  
   "id":251,
   "operation_type":"import",
   "status":"completed"
}
```

## Get package status

Get details of a package imported into a customer account.

```
GET /managed_users/:id/imports/:package_id
```

### URL paramters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id   | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| package_id   | **string**<br>_required_ | Package ID. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/managed_users/91829/imports/198 \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

* This shows a successful import.

```json
{  
   "id":198,
   "operation_type":"import",
   "status":"completed"
}
```

* This shows a package that failed to import properly.

```json
{  
   "id":198,
   "operation_type":"export",
   "status":"failed",
   "error":"error_message"
}
```
