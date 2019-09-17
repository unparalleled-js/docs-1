---
title: Workato API - Recipe lifecycle management
date: 2019-04-25 12:20:00 Z
isTocVisible: true
---

# Recipe lifecycle management

### Supported Formats

* JSON

### Quick reference

| Type | Resource | Description |
|------|----------|-------------|
| POST | [/api/packages/export/:manifest_id](#export-package-based-on-a-manifest)| Export package based on a manifest. |
| POST | [/api/packages/import/:folder_id](#import-package-into-a-folder) | Import package into a folder. |
| GET  | [/api/packages/:id](#get-package-by-id) | Get package by ID. |
| GET  | [/api/packages/:id/download](#download-package) | Download a package. |

## Export package based on a manifest

Export package based on a manifest.

```
POST /api/packages/export/:manifest_id
```

This is an asynchronous request. Use [GET package by ID](#get-package-by-id) endpoint to get details of the exported package.

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| manifest_id | **string**<br>_required_ | Export manifest ID. |

### Response

```json
{  
   "id":242,
   "operation_type":"export",
   "status":"completed",
   "export_manifest_id":3,
   "download_url":"https://workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"
}
```

## Import package into a folder

Import a package (zip file) into a folder.

```
POST /api/packages/import/:folder_id
```

This is an asynchronous request. Use [GET package by ID](#get-package-by-id) endpoint to get details of the imported the package.

The input (zip file) is a “application/octet-stream” payload containing package content. URL parameter **restart_recipes** should be `true` if the running recipes need to be restarted upon import.

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| folder_id | **string**<br>_required_ | Folder ID. |
| restart_recipes | **boolean**<br>_optional_ | If `true`, it will allow the restarting of running recipes. |

### Response

```json
{  
   "id":251,
   "operation_type":"import",
   "status":"completed",
   "download_url":"https://workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"
}
```

## Get package by ID

Get details of an imported or exported package.

```
GET /api/packages/:id
```

### Response

* This shows a successful export.

```json
{  
   "id":242,
   "operation_type":"export",
   "status":"completed",
   "export_manifest_id":3,
   "download_url":"https://workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"
}
```

* This shows a packages that failed to export properly.

```json
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

Downloads a package.

```
GET /api/packages/:id/download
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **string**<br>_required_ | Package ID. |

### Response

If successful, redirects to package content. Returns `404` if package not found or doesn't have content.
