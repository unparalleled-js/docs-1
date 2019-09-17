---
title: Workato API - Introduction
date: 2019-03-20 14:20:00 Z
isTocVisible: true
---

# Workato API 1.0

Workato's REST API provides you with access to Workato resources. With this, you can manage recipes, connections and jobs programmatically to expand the functionality of your Workato account. This API also allows you to author new recipes and modify existing ones.

## Authentication

All API requests must contain:
- `X-USER-TOKEN` and `X-USER-EMAIL` in the request headers
OR
- `user_token` & `user_email` in the query parameters

The `user_token`/`X-USER-TOKEN` can be found in your [settings page](https://www.workato.com/users/current/edit#api_key). Alternatively, navigate to your account settings by clicking on **Account Settings** in the dropdown of the top right of your homepage in Workato. Your API key can be found in the left navigation panel in the subsequent page.

## HTTP response codes

| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

## HTTP response codes

| Code | Description |
| --- | --- |
| `200` | Success |
| `400` | Bad request
| `401` | Unauthorized |
| `404` | Not found |
| `500` | Server error |

## Workato API Resource Overview

Workato's API has various endpoints that allows access functionality to different aspects of Workato. Here is a general overview of the endpoints available.

### Connectors

| Resource | Description |
|----------------|-------------|
|[GET /api/integrations](/workato-api/adapters.md#list-connector-metadata) | Query connector metadata.|

### Connections

| Resource | Description |
|----------------|-------------|
|[GET /api/connections](/workato-api/connections.md#list-connections) | List connections belonging to user |

### Jobs

| Resource | Description |
|----------------|-------------|
|[GET /api/recipes/:recipe_id/jobs](/workato-api/jobs.md#list-jobs-from-a-recipe) | List jobs belonging to recipe |

### Managed Users

| Resource | Description |
|----------------|-------------|
| [POST /api/managed_users](/workato-api/managed-users.md#create-customer-account) | Create a new OEM user. |
| [GET /api/managed_users/:id](#get-customer-account) | Get customer account details. |
| [PUT /api/managed_users/:id/upgrade](/workato-api/managed-users.md#upgrade-customer-account) | Upgrades the customer account from trial OR free to the plan specified in the OEM configuration.
| [PUT /api/managed_users/:id/downgrade](/workato-api/managed-users.md#downgrade-customer-account) | Downgrades the customer account to free plan. |
|[POST /api/managed_users/:id/member](/workato-api/managed-users.md#add-member-to-customer-account) | Add member to the OEM account. |
| [DELETE /api/managed_users/:id/member](/workato-api/managed-users.md#remove-member-customer-account) | Deletes a member from given user's team.
| [GET /api/managed_users/:id/connections](/workato-api/managed-users.md#list-customer-connections)| Returns a list of connections in OEM user's account.|

### Recipes

| Resource | Description |
|----------------|-------------|
|[GET /api/recipes/:id](/workato-api/recipes.md#get-recipe-details) | Get recipe details|
|[POST /api/recipes](/workato-api/recipes.md#create-a-recipe) | Create recipe |
|[PUT /api/recipes/:id](/workato-api/recipes.md#update-a-recipe) | Update recipe |
|[GET /api/recipes](/workato-api/recipes.md#list-recipes-belonging-to-user)| List recipes belonging to user |
|[GET /api/recipes/search](/workato-api/recipes.md#search-for-public-recipes) | Search for public recipes. |
| [PUT /api/recipes/:id/start](/workato-api/recipes.md#start-recipe) | Start recipe |
| [PUT /api/recipes/:id/stop](/workato-api/recipes.md#stop-recipe) | Stop recipe |
| [DELETE /api/recipes/:id](/workato-api/recipes.md#delete-recipe) | Delete recipe |

### User

|Resource|Description|
|--- |--- |
|[GET /api/users/me](/workato-api/users.md#get-user-details)|Get details of authenticated user|

### Recipe lifecycle management

|Resource|Description|
|--- |--- |
|[POST /api/packages/export/:manifest_id](/workato-api/recipe-lifecycle-management.md#export-package-based-on-a-manifest)|Export package based on a manifest|
|[POST /api/packages/import/:folder_id](/workato-api/recipe-lifecycle-management.md#import-package-into-a-folder)|Import package into a folder|
|[GET /api/packages/:id](/workato-api/recipe-lifecycle-management.md#get-package-by-id)|Get package by ID|
|[GET /api/packages/:id/download](/workato-api/recipe-lifecycle-management.md#download-package)|Download package|
