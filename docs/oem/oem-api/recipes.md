---
title: Workato OEM API - Recipes
date: 2020-01-04 11:00:00 Z
---

# Recipes

### Quick reference

| Type | Resource | Description |
|------|----------|-------------|
| GET  | [/api/managed_users/:id/recipes](#list-recipes-in-a-customer-account)| List recipes belonging to a customer account. |
| GET  | [/api/recipes/search](#search-for-public-recipes) | Search for public recipes. |
| PUT  | [/api/managed_users/:managed_user_id/recipes/:recipe_id/start](#start-recipe-in-a-customer-account) | Start a recipe in a customer account. |
| PUT  | [/api/managed_users/:managed_user_id/recipes/:recipe_id/stop](#stop-recipe-in-a-customer-account) | Stop a recipe in a customer account. |
{: .api-quick-reference :}

## List recipes in a customer account

Returns a list of recipes belonging to the authenticated user. Recipes are returned in descending ID order.

```
GET /api/managed_users/:id/recipes
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| active | **boolean**<br>_optional_ | If `true`, returns running recipes. |
| page | **integer**<br>_optional_ | Page number (defaults to 1).|
| per_page | **integer**<br>_optional_ | Page size (defaults to 10, maximum allowed is 100 per page). |
| since_id | **integer**<br>_optional_ | Find recipes with ID less than the given ID. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/managed_users/91829/recipes?active=true \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
  "items": [
    {
      "id": 1929498,
      "user_id": 91829,
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
      "description": "When there is a trigger event, do action",
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

```
GET /api/recipes/search
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| term | **string**<br>_optional_ | Search term. |
| boost_owned | **boolean**<br>_optional_ | If `true`, returned results will give priority to recipes in your account. Defaults to `false`. |
| page | **integer**<br>_optional_ | Page number. Defaults to 0. |
| per_page | **integer**<br>_optional_ | Page size. Defaults to 20, max 20. |
{: .api-input :}

### Request body

| Name | Type | Description |
|------|------|-------------|
| applications | **string**<br>_required_ | Comma separated connector identifiers (e.g: salesforce,service_now). |
{: .api-input :}

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/recipes/search?per_page=1 \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/json' \
      -d '{
            "applications": "salesforce,service_now"
          }'
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

## Start recipe in a customer account

Starts a recipe in a customer account specified by recipe ID.

```
PUT /api/managed_users/:managed_user_id/recipes/:recipe_id/start
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id   | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| recipe_id   | **integer**<br>_optional_ | Recipe ID. |
{: .api-input :}

#### Sample request

```shell
curl  -X PUT https://www.workato.com/api/managed_users/91929/recipes/1028949/start \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
  "success": true
}
```

## Stop recipe in a customer account

Stops a recipe in a customer account specified by recipe ID.

```
PUT /api/managed_users/:managed_user_id/recipes/:recipe_id/stop
```

### URL parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id   | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| recipe_id   | **interger**<br>_optional_ | Recipe ID. |
{: .api-input :}

#### Sample request

```shell
curl  -X PUT https://www.workato.com/api/managed_users/91929/recipes/1028949/stop \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
  "success": true
}
```
