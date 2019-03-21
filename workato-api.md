---
title: Workato API - Introduction
date: 2019-03-20 14:20:00 Z
---

# Workato API 1.0
Workato's REST API provides you with access to Workato resources. With this, you can manage recipes, connections and jobs programmatically to expand the functionality of your Workato account. This API also allows you to auther new recipes and modify existing ones.

## Authentication
All API requests must contain a `user_token` & `user_email` in the query parameters or in the request headers for it to be accepted by Workato. The `user_token` can be found in your [settings page](https://www.workato.com/users/current/edit#api_key). 

Alternatively, navigate to your account settings by clicking on `Account Settings` in the dropdown of the top right of your homepage in Workato. Your API key can be found in the left navigation panel in the subsequent page.

## Workato API Resource Overview
Workato's API has various endpoints that allows access functionality to different aspects of Workato. Here is a general overview of the endpoints available.

### Adapters
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">GET /api/integrations</a> </td>
    <td> Query connector metadata. Requires 'oem_vendor' privilege.</td>
  </tr>
  </tbody>
</table>

### Connections
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">GET /api/connections</a> </td>
    <td> List connections belonging to user</td>
  </tr>
  </tbody>
</table>

### Jobs
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">GET /api/recipes/:recipe_id/jobs</a> </td>
    <td> List jobs belonging to recipe</td>
  </tr>
  </tbody>
</table>


### Managed Users
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">POST /api/managed_users</a> </td>
    <td>Create a new OEM user. Requires 'oem_vendor' privilege.</td>
  </tr>
   <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">POST /api/managed_users/:id/member</a> </td>
    <td>Add member to the OEM account. Requires 'oem_vendor' privilege.</td>
  </tr>
  </tbody>
</table>
  
### Recipes
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">GET /api/recipes/:id</a> </td>
    <td>Get recipe details</td>
  </tr>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">POST /api/recipes</a> </td>
    <td>Create recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">PUT /api/recipes/:id</a> </td>
    <td>Update recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">GET /api/recipes</a> </td>
    <td>List recipes belonging to user</td>
  </tr>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">GET /api/recipes/search</a> </td>
    <td>Search for public recipes. Requires 'oem_vendor' privilege.</td>
  </tr>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">PUT /api/recipes/:id/start</a> </td>
    <td>Start recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">PUT /api/recipes/:id/stop</a> </td>
    <td>Stop recipe</td>
  </tr>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">DELETE /api/recipes/:id</a> </td>
    <td>Delete recipe</td>
  </tr>
  </tbody>
 </table>
 
 ### Users
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='40%'>Resource</th>
        <th width='60%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =400> <a href="https://wwww.workato.com/apidoc/1.0/adapters/index.html">GET /api/users/me</a> </td>
    <td>Get details of authenticated user</td>
  </tr>
  </tbody>
</table>
