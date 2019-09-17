---
title: Workato API - Recipes
date: 2019-03-21 11:20:00 Z
isTocVisible: true
---

# Recipes

Use the following endpoints to work with recipes in Workato.

### Supported Formats

* JSON

### Quick reference

| Type | Resource | Description |
|------|----------|-------------|
| GET  | [/api/recipes/:id](#get-recipe-details) | Get recipe details. |
| POST | [/api/recipes](#create-a-recipe) | Create a recipe. |
| PUT  | [/api/recipes/:id](#update-a-recipe) | Update a recipe. |
| GET  | [/api/recipes](#list-recipes-belonging-to-user)| List recipes belonging to user. |
| GET  | [/api/recipes/search](#search-for-public-recipes) | Search for public recipes. Requires 'oem_vendor' privilege. |
| PUT  | [/api/recipes/:id/start](#start-recipe) | Start recipe. |
| PUT  | [/api/recipes/:id/stop](#stop-recipe) | Stop recipe. |
| DELETE | [/api/recipes/:id](#delete-recipe) | Delete recipe. |

## Get recipe details

Returns a recipe object.

```
GET /api/recipes/:id
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **integer**<br>_required_ | Recipe ID. |

### Response

```json
{
  "id": 48,
  "user_id": 36,
  "name": "Recipe 48",
  "created_at": "2015-05-26T22:53:36.904Z",
  "updated_at": "2015-05-26T22:53:36.904Z",
  "copy_count": 1,
  "trigger_application": "custom_adapter",
  "action_applications": [
    "custom_adapter"
  ],
  "applications": [
    "custom_adapter"
  ],
  "description": "Recipe description 48",
  "parameters_schema": [
    {
      "label": "Status",
      "name": "status",
      "type": "string",
      "control_type": "text",
      "hint": "new/completed etc"
    }
  ],
  "running": false,
  "job_succeeded_count": 0,
  "job_failed_count": 0,
  "last_run_at": null,
  "config": [
    {
      "keyword": "application",
      "provider": "custom_adapter",
      "name": "custom_adapter",
      "account_id": 7
    }
  ],
  "author_name": "Test User36"
}
```

## Create a recipe

Creates a recipe in Workato based on parameters in the request.

```
POST /api/recipes
```

### Request body

| Name | Type | Description |
|------|------|-------------|
| recipe | **hash**<br>_optional_ | The hash of the recipe. |
| recipe[name] | **string**<br>_optional_ | Name of the recipe. |
| recipe[code] | **string**<br>_optional_ | JSON string representing the recipe lines.
| recipe[config] | **string**<br>_optional_ | JSON string representing the connection lines. |

#### Sample request

```json
{
  "name": "Send mail",
  "code": "{\"number\":0,\"provider\":\"clock\",\"name\":\"timer\",\"as\":\"timer\",\"keyword\":\"trigger\",\"dynamicPickListSelection\":{},\"toggleCfg\":{},\"input\":{\"interval\":\"5\",\"start_at\":\"\"},\"block\":[{\"number\":1,\"provider\":\"email\",\"name\":\"send_mail\",\"as\":\"send_mail\",\"keyword\":\"action\",\"dynamicPickListSelection\":{},\"toggleCfg\":{},\"input\":{},\"uuid\":\"cd865246-ece7-4188-845e-33d021664be3\"}],\"uuid\":\"c4b0778d-5a23-4c52-a5bb-4a99ae5d25ae\"}",
  "config": "[{\"keyword\":\"application\",\"name\":\"clock\",\"provider\":\"clock\"},{\"keyword\":\"application\",\"name\":\"email\",\"provider\":\"email\"}]"
}
```

### Response

```json
{
  "success": true,
  "id": 116
}
```

## Update a recipe

Updates a recipe in Workato based on specified recipe ID. Recipe details are defined based on parameters in the request.

```
PUT /api/recipes/:id
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **integer**<br>_required_ | Recipe ID. |

### Request body

| Name | Type | Description |
|------|------|-------------|
| recipe | **hash**<br>_optional_ | The hash of the recipe. |
| recipe[name] | **string**<br>_optional_ | Name of the recipe. |
| recipe[code] | **string**<br>_optional_ | JSON string representing the recipe lines.
| recipe[config] | **string**<br>_optional_ | JSON string representing the connection lines. |

#### Sample request

```json
{
  "name": "Send mail",
  "code": "{\"number\":0,\"provider\":\"clock\",\"name\":\"timer\",\"as\":\"timer\",\"keyword\":\"trigger\",\"dynamicPickListSelection\":{},\"toggleCfg\":{},\"input\":{\"interval\":\"5\",\"start_at\":\"\"},\"block\":[{\"number\":1,\"provider\":\"email\",\"name\":\"send_mail\",\"as\":\"send_mail\",\"keyword\":\"action\",\"dynamicPickListSelection\":{},\"toggleCfg\":{},\"input\":{},\"uuid\":\"cd865246-ece7-4188-845e-33d021664be3\"}],\"uuid\":\"c4b0778d-5a23-4c52-a5bb-4a99ae5d25ae\"}",
  "config": "[{\"keyword\":\"application\",\"name\":\"clock\",\"provider\":\"clock\"},{\"keyword\":\"application\",\"name\":\"email\",\"provider\":\"email\"}]"
}
```

### Response

```json
{
  "success": true
}
```

> Note: You cannot update running recipes.

```json
{
  "success": false,
  "errors": {
    "running": [
      "can't modify running recipe"
    ]
  }
}
```

## List recipes belonging to user

Returns a list of recipes belonging to the authenticated user with respect to different filters. Recipes are returned in descending ID order.

```
GET /api/recipes
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| adapter_names_any | **string**<br>_optional_ | List of adapters names. Resulting recipes should use at least one of given adapters. |
| adapter_names_all | **string**<br>_optional_ | List of adapters names. Resulting recipes should use all of given adapters. |
| active | **string**<br>_optional_ | If `true`, returns running recipes. |
| since_id | **integer**<br>_optional_ | Find recipes with ID less than the given ID. |
| order | **string**<br>_optional_ | Set ordering method. Possible options: activity, default. |

### Response

The request `GET /api/recipes?adapter_names_any=custom_adapter&custom_adapter1` will return the follwing response.

```json
{
  "items": [
    {
      "id": 29,
      "user_id": 25,
      "name": "Recipe 29",
      "created_at": "2015-05-26T22:53:35.802Z",
      "updated_at": "2015-05-26T22:53:35.802Z",
      "copy_count": 1,
      "trigger_application": null,
      "action_applications": [
        "custom_adapter",
        "custom_adapter1"
      ],
      "applications": [
        "custom_adapter",
        "custom_adapter1"
      ],
      "description": "Recipe description 29",
      "parameters_schema": [],
      "running": true,
      "job_succeeded_count": 16,
      "job_failed_count": 2,
      "last_run_at": "2015-05-26T22:43:35.793Z",
      "config": []
    }
  ]
}
```

## Search for public recipes

Searches for public recipes and returns a list. Returns an empty list when no matching connectors are found.

This requires 'oem_vendor' privilege.

```
GET /api/recipes/search
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| term | **string**<br>_optional_ | Search term. |
| boost_owned | **boolean**<br>_optional_ | If `true`, returned results will give priority to recipes in your account. Defaults to `False`. |
| page | **integer**<br>_optional_ | Page number. Defaults to 0. |
| per_page | **integer**<br>_optional_ | Page size. Defaults to 20, max 20. |

### Request body

| Name | Type | Description |
|------|------|-------------|
| applications | **string**<br>_required_ | Comma separated connector identifiers (e.g: salesforce,service_now). |

#### Sample request

```json
{
  "applications": "salesforce,service_now"
}
```
### Response

```json
{
  "items": [
    {
      "id": 59,
      "user_id": 50,
      "name": "Recipe 58",
      "created_at": "2015-05-26T22:53:39.032Z",
      "updated_at": "2015-05-26T22:53:39.032Z",
      "copy_count": 1,
      "trigger_application": null,
      "action_applications": [
        "salesforce",
        "service_now"
      ],
      "applications": [
        "salesforce"
      ],
      "description": "Recipe description 58",
      "parameters_schema": []
    }
  ]
}
```

## Start recipe

Starts a recipe specified by recipe ID.

```
PUT /api/recipes/:id/start
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **interger**<br>_optional_ | Recipe ID. |

### Response

```json
{
  "success": true
}
```

## Stop recipe

Stops a recipe specified by recipe ID.

```
PUT /api/recipes/:id/stop  
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **interger**<br>_optional_ | Recipe ID. |

### Response

```json
{
  "success": true
}
```

## Delete recipe

Deletes a recipe specified by id.

```
DELETE /api/recipes/:id
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **interger**<br>_optional_ | Recipe ID. |

### Response

```json
{
  "success": true
}
```

> Note: you cannot delete a recipe that does not exist.

```json
{
  "message": "Not found"
}
```
