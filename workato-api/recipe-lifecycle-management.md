---
title: Workato API - Recipe lifecycle management
date: 2019-04-25 12:20:00 Z
---

# Recipe lifecycle management
Use the following endpoints to automate the import and export of packages.

### Supported Formats
* JSON

### Contents
|Resource|Description|
|--- |--- |
|[POST /api/packages/export/:manifest_id](#export-package-based-on-a-manifest)|Export package based on a manifest|
|[POST /api/packages/import/:folder_id](#import-package-into-a-folder)|Import package into a folder|
|[GET /api/packages/:id](#get-package-by-id)|Get package by ID|
|[GET /api/packages/:id/download](#download-package)|Download package|

## Export package based on a manifest

> POST /api/packages/export/:manifest_id

### Description
Export package based on a manifest. Manifest ID is required. This is an asynchronous request. Please use the [GET package by ID](workato-api/recipe-lifecycle-management.md#get-package-by-id) endpoint to get details of the exported package after this endpoint is used.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| manifest_id | **string**<br>_required_ | Export manifest ID. |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `500` | Server error |

### Examples

#### Success: 200
```json
GET /api/packages/242
200
{  
   "id":242,
   "operation_type":"export",
   "status":"completed",
   "export_manifest_id":3,
   "download_url":"https://workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"
}
```

## Import package into a folder

> POST /api/packages/import/:folder_id

### Description
Import a package (zip file) into the folder. The input is a “application/octet-stream” payload containing package content. `restart_recipes` should be “true” if running recipes need to be restarted upon import.

This is an asynchronous request. Please use the [GET package by ID](workato-api/recipe-lifecycle-management.md#get-package-by-id) endpoint to get details of the imported package after this endpoint is used.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| folder_id | **string**<br>_required_ | Folder ID. |
| restart_recipes | **boolean**<br>_optional_ | If `True`, it will allow the restarting of running recipes. |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `500` | Server error |

### Examples

#### Success: 200
```json
POST /api/packages/import/2617
200
{  
   "id":251,
   "operation_type":"import",
   "status":"completed",
   "download_url":"https://workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"
}
```

## Get package by ID

> GET /api/packages/:id

### Description
Get details of an imported or exported package.

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `500` | Server error |

### Example

#### Success: 200
```json
GET /api/packages/242
200
{  
   "id":242,
   "operation_type":"export",
   "status":"completed",
   "export_manifest_id":3,
   "download_url":"https://workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"
}
```

```json
GET /api/packages/245
200
{  
   "id":242,
   "operation_type":"export",
   "status":"failed",
   "error":"error_message"
   "export_manifest_id":4,
   "download_url":"null"
}
```

## Download package

> GET /api/packages/:id/download

### Description
If successful, redirects to package content. Returns `404` if package not found or doesn't have content.

### Parameters
| Name | Type | Description |
| --- | --- | --- |
| id | **string**<br>_required_ | Package ID. |

### Responses
| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |
