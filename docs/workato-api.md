---
title: Workato API - Introduction
date: 2019-03-20 14:20:00 Z
---

# Workato API 1.0
Workato's REST API provides you with access to Workato resources. With this, you can manage recipes, connections and jobs programmatically to expand the functionality of your Workato account. This API also allows you to author new recipes and modify existing ones.

## Authentication
All API requests must contain:

- `X-USER-TOKEN` and `X-USER-EMAIL` in the request headers
OR
- `user_token` & `user_email` in the query parameters

The `user_token`/`X-USER-TOKEN` can be found in your [settings page](https://www.workato.com/users/current/edit#api_key). Alternatively, navigate to your account settings by clicking on `Account Settings` in the dropdown of the top right of your homepage in Workato. Your API key can be found in the left navigation panel in the subsequent page.

### Supported Formats
Workato API supports sending request body with the `application/json` content-type. All replies are also encoded in `application/json; charset=utf-8`.

## HTTP response codes

<div class='api_input'></div>

| Name  | Description  | Sample reply                  |
|-------|--------------|-------------------------------|
| `200` | Success      | `{"Success": true}`           |
| `400` | Bad request  | `{"message": "Bad request"}`  |
| `401` | Unauthorized | `{"message": "Unauthorized"}` |
| `404` | Not found    | `{"message": "Not found"}`    |
| `500` | Server error | `{"message":"Server error","id":"3188c2d0-29a4-4080-908e-582e7ed82580"}` |

## Connectors

<div class='api_quick_reference'> </div>

| Type |Resource | Description |
|------|---------|-------------|
| GET | [/api/integrations](/workato-api/adapters.md#list-connector-metadata) | Query connector metadata.|

## Connections

<div class='api_quick_reference'> </div>

| Type |Resource | Description |
|------|---------|-------------|
| GET | [/api/connections](/workato-api/connections.md) | List connections belonging to user. |

## Jobs

<div class='api_quick_reference'> </div>

| Type |Resource | Description |
|------|---------|-------------|
| GET | [/api/recipes/:recipe_id/jobs](/workato-api/jobs.md#list-jobs-belonging-to-a-recipe) | List jobs belonging to recipe. |

## Managed Users

<div class='api_quick_reference'> </div>

<div class='api_quick_reference'> </div>

| Type | Resource | Description |
|------|----------|-------------|
| POST | [/api/managed_users](#create-customer-account) | Create customer account. |
| GET  | [/api/managed_users/:id](#get-customer-account) | Get customer account. |
| PUT  | [/api/managed_users/:id/upgrade](#upgrade-customer-account) | Upgrade customer account. |
| PUT  | [/api/managed_users/:id/downgrade](#downgrade-customer-account) | Downgrade customer account. |
| POST | [/api/managed_users/:id/member](#add-member-to-customer-account) | Add member to customer account. |
| DELETE | [/api/managed_users/:id/member](#remove-member-from-customer-account) |  Remove member from customer account. |
| GET  | [/api/managed_users/:id/connections](#list-customer-connections)| List customer connections. |

## Recipes

<div class='api_quick_reference'> </div>

| Type | Resource | Description |
|------|----------|-------------|
| GET  | [api/recipes/:id](/workato-api/recipes.md#get-recipe-details) | Get recipe details. |
| POST | [api/recipes](/workato-api/recipes.md#create-a-recipe) | Create recipe. |
| PUT  | [api/recipes/:id](/workato-api/recipes.md#update-a-recipe) | Update recipe. |
| GET  | [api/recipes](/workato-api/recipes.md#list-recipes-belonging-to-user)| List recipes belonging to user. |
| GET  | [api/recipes/search](/workato-api/recipes.md#search-for-public-recipes) | Search for public recipes. |
| PUT  | [api/recipes/:id/start](/workato-api/recipes.md#start-recipe) | Start recipe. |
| PUT  | [api/recipes/:id/stop](/workato-api/recipes.md#stop-recipe) | Stop recipe. |
| DELETE | [api/recipes/:id](/workato-api/recipes.md#delete-recipe) | Delete recipe. |

## User

<div class='api_quick_reference'> </div>

| Type | Resource | Description |
|------|----------|-------------|
| GET  | [api/users/me](/workato-api/users.md#get-user-details) | Get details of authenticated user. |

## Recipe lifecycle management

<div class='api_quick_reference'> </div>

| Type | Resource | Description |
|------|----------|-------------|
| POST | [api/packages/export/:manifest_id](/workato-api/recipe-lifecycle-management.md#export-package-based-on-a-manifest) | Export package based on a manifest. |
| POST | [api/packages/import/:folder_id](/workato-api/recipe-lifecycle-management.md#import-package-into-a-folder) | Import package into a folder. |
| GET  | [api/packages/:id](/workato-api/recipe-lifecycle-management.md#get-package-by-id) | Get package by ID. |
| GET  | [api/packages/:id/download](/workato-api/recipe-lifecycle-management.md#download-package) | Download package. |
