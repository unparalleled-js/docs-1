---
title: Workato API - Adapters
date: 2019-03-21 11:20:00 Z
---

# Adapters
Use the following endpoints to retrieve the metadata of your connectors in Workato

### Supported Formats
* Json

## List Connector Metadata

> GET /api/integrations 

### Description
Returns a list of connectors and associated metadata for the Workato user specified in the query parameters or in the request headers of the API request.

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
    Comma separated connector identifiers(e.g: salesforce,service_now) 
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
    "name": "custom_adapter",
    "title": "Test",
    "image_url": "http://www.example.com/assets/adapters/custom_adapter.png",
    "mobile_image_url": "http://www.example.com/assets/adapters/mobile/custom_adapter.png",
    "requires_connection": true,
    "mobile_search": false
  },
  {
    "name": "custom_adapter1",
    "title": "Test",
    "image_url": "http://www.example.com/assets/adapters/custom_adapter1.png",
    "mobile_image_url": "http://www.example.com/images/adapters/mobile/custom_adapter1.png",
    "requires_connection": true,
    "mobile_search": true
  }
]
```

</details>
