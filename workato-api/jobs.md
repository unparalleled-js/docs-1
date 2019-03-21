---
title: Workato API - Jobs
date: 2019-03-21 11:20:00 Z
---

# Jobs
Use the following endpoints to retrieve data related to jobs in Workato

## Supported Formats
* Json

## List Jobs belonging to a Recipe

> GET /api/recipes/:recipe_id/jobs  

### Description
Returns aggregated job information as well as detailed job information for a specified recipe in Workato.

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
    <td width =200 > <b>recipe_id</b> <br> required </td>
    <td> 
    Recipe ID 
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be number</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>offset_run_id</b> <br>optional</td>
    <td> 
    offset_run_id (deprecated)
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be number</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>offset_job_id </b> <br>optional</td>
    <td> 
    offset_job_id 
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be number</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>prev</b> <br>optional</td>
    <td> 
    Previous jobs if 'true', next otherwise
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>failed</b> <br>optional</td>
    <td> 
    Return failed jobs only if 'true' (deprecated)
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>status</b> <br>optional</td>
    <td> 
    Filter by status - succeeded, failed, pending
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>rerun_only</b> <br>optional</td>
    <td> 
    Return rerun jobs only if 'true'
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
    <td width =200 > <kbd>404</kbd> </td>
    <td> Not found </td>
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
GET /api/recipes/137/jobs?offset_run_id=1&offset_job_id=2&prev=true
200
{
  "job_succeeded_count": 5,
  "job_failed_count": 3,
  "job_count": 8,
  "items": [
    {
      "id": 1004,
      "flow_run_id": 1004,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Bad request: Custom field SICCode__c is not present",
      "lines": [],
      "is_poll_error": true,
      "error": "{\"error_type\":\"Bad request\",\"message\":\"Custom field SICCode__c is not present\",\"error_id\":\"6b75ec2c-79df-4c09-b7b6-0137def14378\",\"input\":\"{\\\"LastName\\\"=\\u003e\\\"LLLLL\\\", \\\"Company\\\"=\\u003e\\\"CCCCC\\\", \\\"Status\\\"=\\u003e\\\"Open - Not Contacted\\\", \\\"SICCode__c\\\"=\\u003e\\\"CODE2\\\"}\"}",
      "error_parts": {
        "error_type": "Bad request",
        "message": "Custom field SICCode__c is not present",
        "error_id": "6b75ec2c-79df-4c09-b7b6-0137def14378",
        "input": "{\"LastName\"=>\"LLLLL\", \"Company\"=>\"CCCCC\", \"Status\"=>\"Open - Not Contacted\", \"SICCode__c\"=>\"CODE2\"}"
      },
      "is_error": true
    },
    {
      "id": 1003,
      "flow_run_id": 1004,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Bad request: Custom field 'SICCode__c' is not present",
      "lines": [],
      "is_poll_error": true,
      "error": "Bad request: Custom field 'SICCode__c' is not present; Error ID 058ea58e-fcd5-4206-b93f-c1dcfbf95a32; input: {\"LastName\"=>\"LLLLL\", \"Company\"=>\"CCCCC\", \"Status\"=>\"Open - Not Contacted\", \"SICCode__c\"=>\"CODE1\"}",
      "error_parts": {
        "error_type": "Bad request",
        "message": "Custom field 'SICCode__c' is not present",
        "error_id": "058ea58e-fcd5-4206-b93f-c1dcfbf95a32",
        "input": "{\"LastName\"=>\"LLLLL\", \"Company\"=>\"CCCCC\", \"Status\"=>\"Open - Not Contacted\", \"SICCode__c\"=>\"CODE1\"}"
      },
      "is_error": true
    },
    {
      "id": 1002,
      "flow_run_id": 1002,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Processed event",
      "lines": [],
      "is_poll_error": false,
      "error": null,
      "is_error": false
    },
    {
      "id": 1001,
      "flow_run_id": 1002,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Error",
      "lines": [],
      "is_poll_error": false,
      "error": "Error",
      "error_parts": {},
      "is_error": true
    }
  ]
}
```

```json
GET /api/recipes/138/jobs?offset_run_id=1&offset_job_id=2&failed=true
200
{
  "job_succeeded_count": 5,
  "job_failed_count": 3,
  "job_count": 8,
  "items": [
    {
      "id": 1004,
      "flow_run_id": 1004,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Bad request: Custom field SICCode__c is not present",
      "lines": [],
      "is_poll_error": true,
      "error": "{\"error_type\":\"Bad request\",\"message\":\"Custom field SICCode__c is not present\",\"error_id\":\"6b75ec2c-79df-4c09-b7b6-0137def14378\",\"input\":\"{\\\"LastName\\\"=\\u003e\\\"LLLLL\\\", \\\"Company\\\"=\\u003e\\\"CCCCC\\\", \\\"Status\\\"=\\u003e\\\"Open - Not Contacted\\\", \\\"SICCode__c\\\"=\\u003e\\\"CODE2\\\"}\"}",
      "error_parts": {
        "error_type": "Bad request",
        "message": "Custom field SICCode__c is not present",
        "error_id": "6b75ec2c-79df-4c09-b7b6-0137def14378",
        "input": "{\"LastName\"=>\"LLLLL\", \"Company\"=>\"CCCCC\", \"Status\"=>\"Open - Not Contacted\", \"SICCode__c\"=>\"CODE2\"}"
      },
      "is_error": true
    },
    {
      "id": 1003,
      "flow_run_id": 1004,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Bad request: Custom field 'SICCode__c' is not present",
      "lines": [],
      "is_poll_error": true,
      "error": "Bad request: Custom field 'SICCode__c' is not present; Error ID 058ea58e-fcd5-4206-b93f-c1dcfbf95a32; input: {\"LastName\"=>\"LLLLL\", \"Company\"=>\"CCCCC\", \"Status\"=>\"Open - Not Contacted\", \"SICCode__c\"=>\"CODE1\"}",
      "error_parts": {
        "error_type": "Bad request",
        "message": "Custom field 'SICCode__c' is not present",
        "error_id": "058ea58e-fcd5-4206-b93f-c1dcfbf95a32",
        "input": "{\"LastName\"=>\"LLLLL\", \"Company\"=>\"CCCCC\", \"Status\"=>\"Open - Not Contacted\", \"SICCode__c\"=>\"CODE1\"}"
      },
      "is_error": true
    },
    {
      "id": 1001,
      "flow_run_id": 1002,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Error",
      "lines": [],
      "is_poll_error": false,
      "error": "Error",
      "error_parts": {},
      "is_error": true
    }
  ]
}
```

#### Recipe not found : 404
```json
GET /api/recipes/140/jobs
404
{
  "message": "Not found"
}
```

</details>
