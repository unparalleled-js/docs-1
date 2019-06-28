---
title: Workato API - Introduction
date: 2019-03-20 14:20:00 Z
---

# Workato API 1.0
Workato's REST API provides you with access to Workato resources. With this, you can manage recipes, connections and jobs programmatically to expand the functionality of your Workato account. This API also allows you to auther new recipes and modify existing ones.

## Authentication
All API requests must contain:

- `X-USER-TOKEN` and `X-USER-EMAIL` in the request headers OR
- `user_token` & `user_email` in the query parameters

The `user_token`/`X-USER-TOKEN` can be found in your [settings page](https://www.workato.com/users/current/edit#api_key). Alternatively, navigate to your account settings by clicking on `Account Settings` in the dropdown of the top right of your homepage in Workato. Your API key can be found in the left navigation panel in the subsequent page.

## Workato API Resource Overview
Workato's API has various endpoints that allows access functionality to different aspects of Workato. Here is a general overview of the endpoints available.

### [Adapters](/workato-api/adapters.md)
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="/workato-api/adapters.md#list-connector-metadata">GET /api/integrations</a> </td>
    <td> Query connector metadata. Requires 'oem_vendor' privilege.</td>
  </tr>
  </tbody>
</table>

### [Connections](/workato-api/connections.md)
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="/workato-api/connections.md#list-connections">GET /api/connections</a> </td>
    <td> List connections belonging to user</td>
  </tr>
  </tbody>
</table>

### [Jobs](/workato-api/jobs.md)
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="/workato-api/jobs.md#list-jobs-belonging-to-a-recipe">GET /api/recipes/:recipe_id/jobs</a> </td>
    <td> List jobs belonging to recipe</td>
  </tr>
  </tbody>
</table>


### [Managed Users](/workato-api/managed-users.md)
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="/workato-api/managed-users.md#create-new-oem-users">POST /api/managed_users</a> </td>
    <td>Create a new OEM user. Requires 'oem_vendor' privilege.</td>
  </tr>
   <tr>
    <td width =400> <a href="/workato-api/managed-users.md#add-member-to-oem-account">POST /api/managed_users/:id/member</a> </td>
    <td>Add member to the OEM account. Requires 'oem_vendor' privilege.</td>
  </tr>
  </tbody>
</table>

### [Recipes](/workato-api/recipes.md)
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#get-recipe-details">GET /api/recipes/:id</a> </td>
    <td>Get recipe details</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#create-a-recipe">POST /api/recipes</a> </td>
    <td>Create recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#update-a-recipe">PUT /api/recipes/:id</a> </td>
    <td>Update recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#list-recipes-belonging-to-user">GET /api/recipes</a> </td>
    <td>List recipes belonging to user</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#search-for-public-recipes">GET /api/recipes/search</a> </td>
    <td>Search for public recipes. Requires 'oem_vendor' privilege.</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#start-recipe">PUT /api/recipes/:id/start</a> </td>
    <td>Start recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#stop-recipe">PUT /api/recipes/:id/stop</a> </td>
    <td>Stop recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipes.md#delete-recipe">DELETE /api/recipes/:id</a> </td>
    <td>Delete recipe</td>
  </tr>
  </tbody>
 </table>

 ### [Users](/workato-api/users.md)
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="/workato-api/users.md#get-user-details">GET /api/users/me</a> </td>
    <td>Get details of authenticated user</td>
  </tr>
  </tbody>
</table>

### [Recipe lifecycle management](/workato-api/recipe-lifecycle-management.md)
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="/workato-api/recipe-lifecycle-management.md#export-package-based-on-a-manifest">POST /api/packages/export/:manifest_id </a> </td>
    <td>Export package based on a manifest</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipe-lifecycle-management.md#import-package-into-a-folder">POST /api/packages/import/:folder_id </a> </td>
    <td>Import package into a folder </td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipe-lifecycle-management.md#get-package-by-id">GET /api/packages/:id</a> </td>
    <td>Get package by ID</td>
  </tr>
  <tr>
    <td width =400> <a href="/workato-api/recipe-lifecycle-management.md#download-package">GET /api/packages/:id/download </a> </td>
    <td>Download package</td>
  </tr>
