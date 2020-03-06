---
title: Workato API - Jobs
date: 2019-03-21 11:20:00 Z
---

# Jobs

## List Jobs from a Recipe

Returns aggregated job information as well as detailed job information for a specified recipe in Workato.

```
GET /api/recipes/:id/jobs
```

### URL Parameters

| Name | Type | Description |
|------|------|-------------|
| id   | **integer**<br>_required_ | Recipe id. |
| offset_run_id | **integer**<br>_(deprecated)_ | Offset run id. |
| offset_job_id | **integer**<br>_optional_ | Offset job id. Jobs occuring after the offset job will be returned. |
| prev | **boolean**<br>_optional_ | Previous jobs if `true`, next otherwise. |
| failed | **boolean**<br>_(deprecated)_ | If `true`, returns failed jobs only. |
| status | **string**<br>_optional_ | Filter by status - succeeded, failed, pending. |
| rerun_jobs | **boolean**<br>_optional_ | If `true`, returns rerun jobs only. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET http://www.workato.com/api/recipes/<recipe_id>/jobs?status=failed \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
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
