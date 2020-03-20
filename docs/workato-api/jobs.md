---
title: Workato API - Jobs
date: 2019-03-21 11:20:00 Z
---

# Jobs

## List Jobs from a Recipe

Returns aggregated job information as well as detailed job information for a specified recipe in Workato. Runtime data will not be available from this endpoint.

```
GET /api/recipes/:recipe_id/jobs
```

### URL Parameters

| Name        | Type | Description |
|------------ |------|-------------|
| recipe_id   | **integer**<br>_required_ | Recipe id. |
| offset_run_id | **integer**<br>_(deprecated)_ | Offset run id. |
| offset_job_id | **integer**<br>_optional_ | Offset job id. Jobs occuring after the offset job will be returned. |
| prev        | **boolean**<br>_optional_ | Previous jobs if `true`, next otherwise. |
| failed      | **boolean**<br>_(deprecated)_ | If `true`, returns failed jobs only. |
| status      |     **string**<br>_optional_ | Filter by status - succeeded, failed, pending. |
| rerun_jobs  | **boolean**<br>_optional_ | If `true`, returns rerun jobs only. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/recipes/<recipe_id>/jobs?status=failed \
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
      "title": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
        "is_poll_error": false,
        "error": null,
        "is_error": false
    },
    {
      "id": 1003,
      "flow_run_id": 1004,
      "completed_at": "2015-01-02T01:02:03.000Z",
      "started_at": "2015-01-02T01:02:03.000Z",
      "title": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
      "is_poll_error": false,
      "error": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
      "error_parts": {
        "adapter": "marketo",
        "error_type": "Missing required field",
        "message": "'Filter values' must be present",
        "error_id": "603260f5-a309-45b3-a20e-111d90a28917",
        "error_at": "2020-01-22T01:17:18.021-08:00",
        "input": "<redacted>",
        "inner_message": null
      },
      "is_error": true
    },
  ]
}
```


## Get Job Details by ID

Returns detailed information about the job. If this is a failed job (`"is_error": true`), use this endpoint to identify the recipe line that caused the error.

```
GET /api/recipes/:recipe_id/jobs/:job_id
```

### URL Parameters

| Name      | Type | Description |
|---------- |------|-------------|
| recipe_id | **integer**<br>_required_ | Recipe id. |
| job_id    | **integer**<br>_required_ | Job id.    |
{: .api-input :}

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/recipes/<recipe_id>/jobs/<job_id>\
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
  "id": 1003,
  "flow_run_id": 1004,
  "completed_at": "2015-01-02T01:02:03.000Z",
  "started_at": "2015-01-02T01:02:03.000Z",
  "title": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
  "is_poll_error": true,
      "lines": [
    {
        "recipe_line_number": 0,
        "adapter_name": "workato_service",
        "adapter_operation": "receive_request",
        "input": {
            "service_name": "trigger on marketo action test",
            "request_schema_json": "[{\"control_type\":\"text\",\"label\":\"String\",\"type\":\"string\",\"name\":\"string\"},{\"control_type\":\"number\",\"label\":\"Integer\",\"parse_output\":\"float_conversion\",\"type\":\"number\",\"name\":\"integer\"},{\"properties\":[{\"control_type\":\"text\",\"label\":\"String\",\"type\":\"string\",\"name\":\"string\"},{\"control_type\":\"number\",\"label\":\"Interger\",\"parse_output\":\"float_conversion\",\"type\":\"number\",\"name\":\"interger\"}],\"label\":\"Object\",\"type\":\"object\",\"name\":\"object\"}]"
        },
        "output": {
            "context": {
                "calling_ip": "129.1.1.1",
                "access_profile": {
                    "id": 123456,
                    "name": "market_test",
                    "type": "token"
                },
                "client": {
                    "id": 1234,
                    "name": "Default client"
                }
            },
            "request": {
                "string": "",
                "integer": 0,
                "object": {
                    "string": "string",
                    "interger": 0
                }
            }
        },
        "mask_data": false,
        "line_stat": {
            "total": 0.000729679,
            "details": [...],
    {
        "recipe_line_number": 1,
        "adapter_name": "marketo",
        "adapter_operation": "search_leads",
        "input": {
            "filterType": "'SICCode__c'",
            "filterValues": ""
        },
        "error": "'Filter values' must be present",
        "mask_data": false,
        "line_stat": {
            "total": 0.0008449130000000001,
            "details": [...]
        }
    }
],

  "error": "Callable recipes by Workato: new call for recipe: Calling IP address=129.1.1.1, Access profile ID=123456, and Access profile name=recipe_test",
  "error_parts": {
    "error_type": "Bad request",
    "message": "Custom field 'SICCode__c' is not present",
    "error_id": "058ea58e-fcd5-4206-b93f-c1dcfbf95a32",
    "input": "<redacted>"
  },
  "is_error": true
}
```

::: tip
Troubleshoot the job error by identifying the line.

```json
  "recipe_line_number": 1,
  ...
  "error": "'Filter values' must be present"
```
:::
