---
title: Workato API - Connections
date: 2019-03-21 11:20:00 Z
---

# Connections
Use the following endpoints to retrieve the connections that belong to a user.

## Supported Formats
* Json

## List Connections

> GET /api/connections  

### Description
Returns all connections and associated data for the Workato user specified in the query parameters or in the request headers of the API request.

<details> <summary> <b>Details</b></summary>

### Responses
<table class="unchanged rich-diff-level-one" text-align ="center">
  <thead>
    <tr>
        <th width='20%'>Code</th>
        <th width='80%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =200 > <kbd>200</kbd> </td>
    <td> Success </td>
  </tr>
  <tr>
    <td width =200 > <kbd>401</kbd> </td>
    <td> Unauthorized </td>
  </tr>
  <tr>
    <td width =200 > <kbd>500</kbd> </td>
    <td> Server error </td>
  </tr>
  </tbody>
</table>

### Examples

#### Success: 200
```json
GET /api/connections
200
[
  {
    "application": "Salesforce",
    "id": 36,
    "name": "ACME Production Salesforce connection",
    "description": null,
    "authorized_at": "2015-05-26T22:53:52.528Z",
    "authorization_status": "success",
    "authorization_error": null,
    "created_at": "2015-05-26T22:53:52.532Z",
    "updated_at": "2015-05-26T22:53:52.532Z"
  }
]
```

</details>
