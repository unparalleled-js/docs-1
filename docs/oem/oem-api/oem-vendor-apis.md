---
title: Customer managers
date: 2019-10-24 11:00:00 Z
---

# OEM Vendor APIs
Workato's OEM vendor platform APIs allow OEM partners to control and even automate the provisioning of customer accounts and assets within them like recipes and connections.

The requests are authenticated by the credentials of the partner's OEM vendor account. To start using the APIs listed below, the OEM vendor Workato account has to first be assigned the `oem_vendor` privilege.

## Authentication
All API requests must contain:

- `X-USER-TOKEN` and `X-USER-EMAIL` in the request headers
OR
- `user_token` & `user_email` in the query parameters

For all OEM vendor APIs, the token and email belong to the main OEM account.

The `user_token`/`X-USER-TOKEN` can be found in the [settings page](https://www.workato.com/users/current/edit#api_key). Alternatively, navigate to account settings by clicking on `Account Settings` in the dropdown of the top right of the homepage in Workato. The API key can be found in the left navigation panel in the subsequent page.

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
| GET | [/api/integrations](/oem/oem-api/adapters.md#list-connector-metadata) | Query connector metadata.|

## Connections

<div class='api_quick_reference'> </div>

| Type |Resource | Description |
|------|---------|-------------|
| GET  | [/api/managed_users/:managed_user_id/connections](/oem/oem-api/connections.md#list-connections) | Returns a list of connections in a customer account. |
| POST | [/api/managed_users/:id/connections](/workato-api/connections.md) | Allows the OEM vendor to add a shell connection in a customer account. |

## Folders

<div class='api_quick_reference'> </div>

| Type |Resource | Description |
|------|---------|-------------|
| POST | [/api/managed_users/:id/folders](/oem/oem-api/folders.md) | Creates a new folder in a customer account. |


## Manage customer accounts

<div class='api_quick_reference'> </div>

| Type | Resource | Description |
|------|----------|-------------|
| POST | [/api/managed_users](/oem/oem-api/managed-users.md#create-customer-account) | Create customer account. |
| GET  | [/api/managed_users/:id](/oem/oem-api/managed-users.md#get-customer-account) | Get customer account. |
| PUT  | [/api/managed_users/:id/upgrade](/workato-api/managed-users.md#upgrade-customer-account) | Upgrade customer account. |
| PUT  | [/api/managed_users/:id/downgrade](/oem/oem-api/managed-users.md#downgrade-customer-account) | Downgrade customer account. |
| POST | [/api/managed_users/:id/member](/oem/oem-api/managed-users.md#add-member-to-customer-account) | Add member to customer account. |
| DELETE | [/api/managed_users/:id/member](/oem/oem-api/managed-users.md#remove-member-from-customer-account) |  Remove member from customer account. |
| GET  | [/api/managed_users/:id/connections](/oem/oem-api/managed-users.md#list-customer-connections)| List customer connections. |

## Recipes

<div class='api_quick_reference'> </div>

| Type | Resource | Description |
|------|----------|-------------|
| GET  | [api/managed_users/:id/recipes](/workato-api/recipes.md#get-recipe-details) | Get recipe details. |
| POST | [api/recipes](/workato-api/recipes.md#create-a-recipe) | Create recipe. |
| PUT  | [api/recipes/:id](/workato-api/recipes.md#update-a-recipe) | Update recipe. |
| GET  | [api/recipes](/workato-api/recipes.md#list-recipes-belonging-to-user)| List recipes belonging to user. |
| GET  | [api/recipes/search](/workato-api/recipes.md#search-for-public-recipes) | Search for public recipes. |
| PUT  | [api/recipes/:id/start](/workato-api/recipes.md#start-recipe) | Start recipe. |
| PUT  | [api/recipes/:id/stop](/workato-api/recipes.md#stop-recipe) | Stop recipe. |
| DELETE | [api/recipes/:id](/workato-api/recipes.md#delete-recipe) | Delete recipe. |


## Recipe lifecycle management

<div class='api_quick_reference'> </div>

| Type | Resource | Description |
|------|----------|-------------|
| POST | [api/packages/export/:manifest_id](/workato-api/recipe-lifecycle-management.md#export-package-based-on-a-manifest) | Export package based on a manifest. |
| POST | [api/packages/import/:folder_id](/workato-api/recipe-lifecycle-management.md#import-package-into-a-folder) | Import package into a folder. |
| GET  | [api/packages/:id](/workato-api/recipe-lifecycle-management.md#get-package-by-id) | Get package by ID. |
| GET  | [api/packages/:id/download](/workato-api/recipe-lifecycle-management.md#download-package) | Download package. |
