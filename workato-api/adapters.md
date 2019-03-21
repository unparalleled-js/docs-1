---
title: Workato API - Adapters
date: 2019-03-21 11:20:00 Z
---

# Adapters
Use the following endpoints to retrieve the metadata of connectors in Workato.

### Supported Formats
* Json

## List Connector Metadata

> GET /api/integrations

### Description
Returns a list of connectors and associated metadata specified in the query parameters or in the request headers of the API request. 

<details> <summary> <b>Details</b></summary>

### Parameters
<table class="unchanged rich-diff-level-one" text-align ="center">
  <thead>
    <tr>
        <th width='20%'>Parameter name</th>
        <th width='80%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =200 > <b> applications</b> <br> optional </td>
    <td>
    Comma separated connector identifiers (e.g: salesforce,service_now)
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
  </tr>
  </tbody>
</table>

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
GET /api/adapters
200
[
  {
    "name": "salesforce",
    "title": "Salesforce",
    "image_url": "http://www.example.com/assets/adapters/salesforce_logo.png",
    "mobile_image_url": "http://www.example.com/assets/adapters/mobile/salesforce_logo.png",
    "requires_connection": true,
    "mobile_search": false
  },
  {
    "name": "service_now",
    "title": "Service Now",
    "image_url": "http://www.example.com/assets/adapters/service_now.png",
    "mobile_image_url": "http://www.example.com/images/adapters/servicenow.png",
    "requires_connection": true,
    "mobile_search": true
  }
]
```

</details>
