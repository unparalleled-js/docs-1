---
title: Activity audit log streaming
date: 2019-09-23 19:00:00 Z
---


# Audit Log Streaming
Workato can store the job history of all your recipes as well as login and user activity to an Amazon S3 bucket or any REST endpoint. Any log service provider (such as [Sumo Logic](https://www.sumologic.com)) may be used. When enabled, we will create a JSON file for each event. The file size varies from 1kB to 1MB based on the details that are present in the logs.

This is an add-on feature. Please view our Pricing page or speak with your account representative to enable audit log streaming in your account.

## How to set up
Click on the Audit log streaming tab in your Account Settings and use the toggle button to enable audit log streaming.

![Set up](~@img/activity-audit/audit1.png)

You will then be able to select the type of events that need to be included in your audit log stream. You may stream the following information by selecting one or more options. If you choose to stream your job history, you will have the additional option to include your recipe step details in your audit log stream.

![Set up](~@img/activity-audit/audit2.png)

## Audit stream destination
You may choose one of the following options as your audit stream destination.

1. Amazon S3 bucket: Please select an Amazon S3 connection that has a region and bucket set up. The connection should have read/write access to the bucket.
2. REST endpoint URL: Please enter a REST endpoint URL that you would like to use. Any log service provider (such as Sumo Logic) may be used. [Learn more](https://help.sumologic.com/03Send-Data/Sources/02Sources-for-Hosted-Collectors/HTTP-Source) about configuring an HTTP log using Sumo Logic.

## JSON file details
Workato creates a JSON file for each event. The file path and name format are as follows:

| Item  | Description |
| :---- | :---        |
| path  | user_id/jobs/recipe_id/YYYYMMDD/formatted_job_id/ <br> <br> formatted_job_id is the job id expanded in to a 21 digit number(left padded with 0s) and split in to 3 character fragments separated by /.  <br> <br> Eg: Job id 100 is formatted as 000/000/000/000/000/000/100  |
| name  | user_id-recipe_id-job_id-YYYYMMDDHHMMSS-status.json <br>  <br> status is the job completion status: succeeded or failed <br> <br>Eg: 5234-234-100-20180521000000-succeeded.json |

Eg: 5234/jobs/234/20180521/000/000/000/000/000/000/100/5234-234-100-20180521000000-succeeded.json

## JSON file content - Job history sample data

### Job history - Success
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id":994216821,
  "flow_id":1002398,
  "parent_id":null,
  "calling_job_id":null,
  "status":"succeeded",
  "error_type":null,
  "error":null,
  "title":"Scheduler by Workato: new scheduled event: Start time=2019-09-13T12:22:17.867522-07:00",
  "is_poll_error":false,
  "action_count":1,
  "started_at":"2019-09-13T12:22:18-07:00",
  "completed_at":"2019-09-13T12:22:18-07:00",
  "report":{
    "clock":{
      "698b411f":{
        "time":"2019-09-13T12:22:17.867522-07:00"
      }
    },
    "workato":{
      "job_context":{
        "user_id":4848,
        "user_name":"janedoen",
        "user_email":"janedoe@workato.com",
        "recipe_id":1002398,
        "recipe_url":"https://www.workato.com/recipes/1002398",
        "job_id":994216821,
        "job_url":"https://www.workato.com/recipes/1002398/job/994216821",
        "job_created_at":"2019-09-13T12:22:18.245573-07:00",
        "repeated_job":false,
        "parent_job_id":null,
        "parameters":{

        }
      }
    },
    "logger":{
      "0d0a79cd":{

      }
    }
  },
  "lines":[
    {
      "recipe_line_number":0,
      "adapter_name":"clock",
      "adapter_operation":"timer",
      "input":{
        "interval":"5"
      },
      "output":{
        "time":"2019-09-13T12:22:17.867522-07:00"
      },
      "error":null,
      "mask_data":false,
      "line_stat":{
        "total":0.0007821220000000001,
        "details":[
          {
            "name":"map_input",
            "count":1,
            "average":9.4693e-05,
            "total":9.4693e-05,
            "min":9.4693e-05,
            "max":9.4693e-05
          },
          {
            "name":"normalize_input",
            "count":1,
            "average":0.000107997,
            "total":0.000107997,
            "min":0.000107997,
            "max":0.000107997
          },
          {
            "name":"summarize_input_report",
            "count":1,
            "average":0.000147281,
            "total":0.000147281,
            "min":0.000147281,
            "max":0.000147281
          },
          {
            "name":"summarize_output_report",
            "count":1,
            "average":0.000105238,
            "total":0.000105238,
            "min":0.000105238,
            "max":0.000105238
          },
          {
            "name":"event_title",
            "count":1,
            "average":0.000326913,
            "total":0.000326913,
            "min":0.000326913,
            "max":0.000326913
          }
        ]
      }
    },
    {
      "recipe_line_number":1,
      "adapter_name":"logger",
      "adapter_operation":"log_message",
      "input":{

      },
      "output":{

      },
      "error":null,
      "mask_data":false,
      "line_stat":{
        "total":0.000972235,
        "details":[
          {
            "name":"map_input",
            "count":1,
            "average":6.421e-05,
            "total":6.421e-05,
            "min":6.421e-05,
            "max":6.421e-05
          },
          {
            "name":"normalize_input",
            "count":2,
            "average":5.3233e-05,
            "total":0.000106466,
            "min":4.1568e-05,
            "max":6.4898e-05
          },
          {
            "name":"trim_input",
            "count":1,
            "average":0.000115123,
            "total":0.000115123,
            "min":0.000115123,
            "max":0.000115123
          },
          {
            "name":"input_with_indifferent_access",
            "count":1,
            "average":4.7328e-05,
            "total":4.7328e-05,
            "min":4.7328e-05,
            "max":4.7328e-05
          },
          {
            "name":"render_input",
            "count":1,
            "average":0.000115039,
            "total":0.000115039,
            "min":0.000115039,
            "max":0.000115039
          },
          {
            "name":"input_flattened",
            "count":1,
            "average":7.8989e-05,
            "total":7.8989e-05,
            "min":7.8989e-05,
            "max":7.8989e-05
          },
          {
            "name":"execute",
            "count":1,
            "average":0.000171295,
            "total":0.000171295,
            "min":0.000171295,
            "max":0.000171295
          },
          {
            "name":"parse_output",
            "count":1,
            "average":9.8868e-05,
            "total":9.8868e-05,
            "min":9.8868e-05,
            "max":9.8868e-05
          },
          {
            "name":"normalize_output",
            "count":1,
            "average":4.4178e-05,
            "total":4.4178e-05,
            "min":4.4178e-05,
            "max":4.4178e-05
          },
          {
            "name":"summarize_input_report",
            "count":1,
            "average":9.7098e-05,
            "total":9.7098e-05,
            "min":9.7098e-05,
            "max":9.7098e-05
          },
          {
            "name":"summarize_output_report",
            "count":1,
            "average":8.6874e-05,
            "total":8.6874e-05,
            "min":8.6874e-05,
            "max":8.6874e-05
          }
        ]
      }
    }
  ]
}
```

</details>

### Job history - Failure
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id":994697528,
  "flow_id":1004057,
  "parent_id":null,
  "calling_job_id":null,
  "status":"failed",
  "error_type":"Exception",
  "error":"{\"adapter\":\"Workato\",\"error_type\":\"Exception\",\"message\":\"Error calculating input for field 'message': undefined method `to_date' for 123:Fixnum\\nDid you mean?to_d\",\"error_id\":\"74c73b55-6cad-4325-b89d-7226f26402c8\",\"error_at\":\"2019-09-13T15:27:27.446-07:00\",\"input\":\"\\u003credacted\\u003e\",\"inner_message\":\"#\\u003cNoMethodError: undefined method `to_date' for 123:Fixnum\\nDid you mean?to_d\\u003e\"}",
  "title":"Scheduler by Workato: new scheduled event: Start time=2019-09-13T15:27:26.590705-07:00",
  "is_poll_error":false,
  "action_count":null,
  "started_at":"2019-09-13T15:27:27-07:00",
  "completed_at":"2019-09-13T15:27:27-07:00",
  "report":{
    "clock":{
      "920fcdb5":{
        "time":"2019-09-13T15:27:26.590705-07:00"
      }
    },
    "workato":{
      "job_context":{
        "user_id":4848,
        "user_name":"janedoen",
        "user_email":"janedoe@workato.com",
        "recipe_id":1004057,
        "recipe_url":"https://www.workato.com/recipes/1004057",
        "job_id":994697528,
        "job_url":"https://www.workato.com/recipes/1004057/job/994697528",
        "job_created_at":"2019-09-13T15:27:27.141078-07:00",
        "repeated_job":false,
        "parent_job_id":null,
        "parameters":{

        }
      }
    }
  }
}
```

</details>

## JSON file content - Recipe step details

### Recipe step details - Success
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id":994209784,
  "flow_id":999392,
  "parent_id":null,
  "calling_job_id":null,
  "status":"succeeded",
  "error_type":null,
  "error":null,
  "title":"Scheduler by Workato: new scheduled event: Start time=2019-09-13T12:19:54.200143-07:00",
  "is_poll_error":false,
  "action_count":2,
  "started_at":"2019-09-13T12:19:54-07:00",
  "completed_at":"2019-09-13T12:19:54-07:00",
  "report":{
    "clock":{
      "e732c137":{
        "time":"2019-09-13T12:19:54.200143-07:00"
      }
    },
    "workato":{
      "job_context":{
        "user_id":4848,
        "user_name":"janedoen",
        "user_email":"janedoe@workato.com",
        "recipe_id":999392,
        "recipe_url":"https://www.workato.com/recipes/999392",
        "job_id":994209784,
        "job_url":"https://www.workato.com/recipes/999392/job/994209784",
        "job_created_at":"2019-09-13T12:19:54.470459-07:00",
        "repeated_job":false,
        "parent_job_id":null,
        "parameters":{

        }
      }
    },
    "csv_parser":{
      "4e1c94fb":{
        "lines":[
          {
            "column_0":"Sierra Gardening",
            "column_1":"MS-321",
            "column_2":"Gardening supplies",
            "column_3":"Pine wood potting bench",
            "column_4":"MS-321",
            "column_5":"Oakwood potting bench",
            "column_6":"74.50",
            "column_7":"119.99",
            "column_8":"Yes",
            "column_9":"0.0875",
            "column_10":"Pine",
            "column_11":"White",
            "column_12":"30 inches"
          },
          {
            "column_0":"Sierra Gardening",
            "column_1":"MS-322",
            "column_2":"Gardening supplies",
            "column_3":"Cherry wood potting bench",
            "column_4":"MS-322",
            "column_5":"Oakwood potting bench",
            "column_6":"74.50",
            "column_7":"119.99",
            "column_8":"Yes",
            "column_9":"0.0875",
            "column_10":"Cherry",
            "column_11":"Natural",
            "column_12":"30 inches"
          },
          {
            "column_0":"Sierra Gardening",
            "column_1":"MS-323",
            "column_2":"Gardening supplies",
            "column_3":"Cedar wood potting bench",
            "column_4":"MS-323",
            "column_5":"Oakwood potting bench",
            "column_6":"74.50",
            "column_7":"119.99",
            "column_8":"Yes",
            "column_9":"0.0875",
            "column_10":"Cedar",
            "column_11":"Black",
            "column_12":"30 inches"
          }
        ]
      }
    },
    "logger":{
      "07a14ebf":{
        "message":"Pine"
      }
    }
  },
  "lines":[
    {
      "recipe_line_number":0,
      "adapter_name":"clock",
      "adapter_operation":"timer",
      "input":{
        "interval":"5"
      },
      "output":{
        "time":"2019-09-13T12:19:54.200143-07:00"
      },
      "error":null,
      "mask_data":false,
      "line_stat":{
        "total":0.000505935,
        "details":[
          {
            "name":"map_input",
            "count":1,
            "average":6.8171e-05,
            "total":6.8171e-05,
            "min":6.8171e-05,
            "max":6.8171e-05
          },
          {
            "name":"normalize_input",
            "count":1,
            "average":7.8841e-05,
            "total":7.8841e-05,
            "min":7.8841e-05,
            "max":7.8841e-05
          },
          {
            "name":"summarize_input_report",
            "count":1,
            "average":9.0806e-05,
            "total":9.0806e-05,
            "min":9.0806e-05,
            "max":9.0806e-05
          },
          {
            "name":"summarize_output_report",
            "count":1,
            "average":5.923e-05,
            "total":5.923e-05,
            "min":5.923e-05,
            "max":5.923e-05
          },
          {
            "name":"event_title",
            "count":1,
            "average":0.000208887,
            "total":0.000208887,
            "min":0.000208887,
            "max":0.000208887
          }
        ]
      }
    },
    {
      "recipe_line_number":1,
      "adapter_name":"csv_parser",
      "adapter_operation":"parse_csv",
      "input":{
        "col_sep":",",
        "skip_first_line":"true",
        "column_value_by":"index",
        "quote_char":"\"",
        "csv_content":"<csv content>",
        "header_line":"Manufacturer, Model, Category, Item Name, Item Code, Description, Unit Cost, Unit Price, Taxable, Tax, Custom Field 1, Custom Field 2, Custom Field 3"
      },
      "output":{
        "lines":[
          {
            "column_0":"Sierra Gardening",
            "column_1":"MS-321",
            "column_2":"Gardening supplies",
            "column_3":"Pine wood potting bench",
            "column_4":"MS-321",
            "column_5":"Oakwood potting bench",
            "column_6":"74.50",
            "column_7":"119.99",
            "column_8":"Yes",
            "column_9":"0.0875",
            "column_10":"Pine",
            "column_11":"White",
            "column_12":"30 inches"
          },
          {
            "column_0":"Sierra Gardening",
            "column_1":"MS-322",
            "column_2":"Gardening supplies",
            "column_3":"Cherry wood potting bench",
            "column_4":"MS-322",
            "column_5":"Oakwood potting bench",
            "column_6":"74.50",
            "column_7":"119.99",
            "column_8":"Yes",
            "column_9":"0.0875",
            "column_10":"Cherry",
            "column_11":"Natural",
            "column_12":"30 inches"
          },
          {
            "column_0":"Sierra Gardening",
            "column_1":"MS-323",
            "column_2":"Gardening supplies",
            "column_3":"Cedar wood potting bench",
            "column_4":"MS-323",
            "column_5":"Oakwood potting bench",
            "column_6":"74.50",
            "column_7":"119.99",
            "column_8":"Yes",
            "column_9":"0.0875",
            "column_10":"Cedar",
            "column_11":"Black",
            "column_12":"30 inches"
          }
        ]
      },
      "error":null,
      "mask_data":false,
      "line_stat":{
        "total":0.002067429,
        "details":[
          {
            "name":"map_input",
            "count":1,
            "average":4.9859e-05,
            "total":4.9859e-05,
            "min":4.9859e-05,
            "max":4.9859e-05
          },
          {
            "name":"normalize_input",
            "count":2,
            "average":8.1282e-05,
            "total":0.000162564,
            "min":7.2687e-05,
            "max":8.9877e-05
          },
          {
            "name":"trim_input",
            "count":1,
            "average":0.000127116,
            "total":0.000127116,
            "min":0.000127116,
            "max":0.000127116
          },
          {
            "name":"input_with_indifferent_access",
            "count":1,
            "average":4.1339e-05,
            "total":4.1339e-05,
            "min":4.1339e-05,
            "max":4.1339e-05
          },
          {
            "name":"render_input",
            "count":1,
            "average":0.000163049,
            "total":0.000163049,
            "min":0.000163049,
            "max":0.000163049
          },
          {
            "name":"input_flattened",
            "count":1,
            "average":7.7802e-05,
            "total":7.7802e-05,
            "min":7.7802e-05,
            "max":7.7802e-05
          },
          {
            "name":"execute",
            "count":1,
            "average":0.000609662,
            "total":0.000609662,
            "min":0.000609662,
            "max":0.000609662
          },
          {
            "name":"output_with_indifferent_access",
            "count":1,
            "average":0.000125174,
            "total":0.000125174,
            "min":0.000125174,
            "max":0.000125174
          },
          {
            "name":"parse_output",
            "count":1,
            "average":0.000263303,
            "total":0.000263303,
            "min":0.000263303,
            "max":0.000263303
          },
          {
            "name":"normalize_output",
            "count":1,
            "average":0.000277034,
            "total":0.000277034,
            "min":0.000277034,
            "max":0.000277034
          },
          {
            "name":"summarize_input_report",
            "count":1,
            "average":0.000126073,
            "total":0.000126073,
            "min":0.000126073,
            "max":0.000126073
          },
          {
            "name":"summarize_output_report",
            "count":1,
            "average":0.000125736,
            "total":0.000125736,
            "min":0.000125736,
            "max":0.000125736
          }
        ]
      }
    },
    {
      "recipe_line_number":2,
      "adapter_name":"logger",
      "adapter_operation":"log_message",
      "input":{
        "message":"Pine"
      },
      "output":{
        "message":"Pine"
      },
      "error":null,
      "mask_data":false,
      "line_stat":{
        "total":0.0007128120000000001,
        "details":[
          {
            "name":"map_input",
            "count":1,
            "average":7.1278e-05,
            "total":7.1278e-05,
            "min":7.1278e-05,
            "max":7.1278e-05
          },
          {
            "name":"normalize_input",
            "count":2,
            "average":4.2277e-05,
            "total":8.4554e-05,
            "min":3.4276e-05,
            "max":5.0278e-05
          },
          {
            "name":"trim_input",
            "count":1,
            "average":7.9536e-05,
            "total":7.9536e-05,
            "min":7.9536e-05,
            "max":7.9536e-05
          },
          {
            "name":"input_with_indifferent_access",
            "count":1,
            "average":3.265e-05,
            "total":3.265e-05,
            "min":3.265e-05,
            "max":3.265e-05
          },
          {
            "name":"render_input",
            "count":1,
            "average":7.0758e-05,
            "total":7.0758e-05,
            "min":7.0758e-05,
            "max":7.0758e-05
          },
          {
            "name":"input_flattened",
            "count":1,
            "average":4.7988e-05,
            "total":4.7988e-05,
            "min":4.7988e-05,
            "max":4.7988e-05
          },
          {
            "name":"execute",
            "count":1,
            "average":0.000103286,
            "total":0.000103286,
            "min":0.000103286,
            "max":0.000103286
          },
          {
            "name":"parse_output",
            "count":1,
            "average":7.5699e-05,
            "total":7.5699e-05,
            "min":7.5699e-05,
            "max":7.5699e-05
          },
          {
            "name":"normalize_output",
            "count":1,
            "average":4.3047e-05,
            "total":4.3047e-05,
            "min":4.3047e-05,
            "max":4.3047e-05
          },
          {
            "name":"summarize_input_report",
            "count":1,
            "average":6.5388e-05,
            "total":6.5388e-05,
            "min":6.5388e-05,
            "max":6.5388e-05
          },
          {
            "name":"summarize_output_report",
            "count":1,
            "average":8.0905e-05,
            "total":8.0905e-05,
            "min":8.0905e-05,
            "max":8.0905e-05
          }
        ]
      }
    }
  ]
}
```

</details>

### Recipe step details - Failure
<details><summary><b>Sample JSON</b></summary>

```json
{
  "id":994699343,
  "flow_id":1004058,
  "parent_id":null,
  "calling_job_id":null,
  "status":"failed",
  "error_type":"Exception",
  "error":"{\"adapter\":\"Workato\",\"error_type\":\"Exception\",\"message\":\"Error calculating input for field 'message': undefined method `to_date' for 123:Fixnum\\nDid you mean?to_d\",\"error_id\":\"2317791c-6007-4057-a4bd-0ef26efd7088\",\"error_at\":\"2019-09-13T15:28:05.392-07:00\",\"input\":\"\\u003credacted\\u003e\",\"inner_message\":\"#\\u003cNoMethodError: undefined method `to_date' for 123:Fixnum\\nDid you mean?to_d\\u003e\"}",
  "title":"Scheduler by Workato: new scheduled event: Start time=2019-09-13T15:28:04.886708-07:00",
  "is_poll_error":false,
  "action_count":null,
  "started_at":"2019-09-13T15:28:05-07:00",
  "completed_at":"2019-09-13T15:28:05-07:00",
  "report":{
    "clock":{
      "920fcdb5":{
        "time":"2019-09-13T15:28:04.886708-07:00"
      }
    },
    "workato":{
      "job_context":{
        "user_id":4848,
        "user_name":"janedoen",
        "user_email":"janedoe@workato.com",
        "recipe_id":1004058,
        "recipe_url":"https://www.workato.com/recipes/1004058",
        "job_id":994699343,
        "job_url":"https://www.workato.com/recipes/1004058/job/994699343",
        "job_created_at":"2019-09-13T15:28:05.220978-07:00",
        "repeated_job":false,
        "parent_job_id":null,
        "parameters":{

        }
      }
    }
  },
  "lines":[
    {
      "recipe_line_number":0,
      "adapter_name":"clock",
      "adapter_operation":"timer",
      "input":{
        "interval":"5"
      },
      "output":{
        "time":"2019-09-13T15:28:04.886708-07:00"
      },
      "error":null,
      "mask_data":false,
      "line_stat":{
        "total":0.0005550119999999999,
        "details":[
          {
            "name":"map_input",
            "count":1,
            "average":8.8976e-05,
            "total":8.8976e-05,
            "min":8.8976e-05,
            "max":8.8976e-05
          },
          {
            "name":"normalize_input",
            "count":1,
            "average":9.4408e-05,
            "total":9.4408e-05,
            "min":9.4408e-05,
            "max":9.4408e-05
          },
          {
            "name":"summarize_input_report",
            "count":1,
            "average":9.0039e-05,
            "total":9.0039e-05,
            "min":9.0039e-05,
            "max":9.0039e-05
          },
          {
            "name":"summarize_output_report",
            "count":1,
            "average":5.8227e-05,
            "total":5.8227e-05,
            "min":5.8227e-05,
            "max":5.8227e-05
          },
          {
            "name":"event_title",
            "count":1,
            "average":0.000223362,
            "total":0.000223362,
            "min":0.000223362,
            "max":0.000223362
          }
        ]
      }
    },
    {
      "recipe_line_number":1,
      "adapter_name":"logger",
      "adapter_operation":"log_message",
      "input":null,
      "output":null,
      "error":"Error calculating input for field 'message': undefined method `to_date' for 123:Fixnum\nDid you mean?to_d",
      "mask_data":false,
      "line_stat":{
        "total":0.003192014,
        "details":[
          {
            "name":"map_input",
            "count":1,
            "average":0.003192014,
            "total":0.003192014,
            "min":0.003192014,
            "max":0.003192014
          }
        ]
      }
    }
  ]
}
```

</details>

## JSON file content - Login and user activity

### User login
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"user_login",
  "details":{
    "activity":"password_login",
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"User",
    "id":4848,
    "name":"janedoen",
    "email":"janedoe@workato.com",
    "email_confirmed_at":"2019-08-01 06:43:54 -0700"
  },
  "timestamp":"2019-09-13 17:24:16 UTC"
}
```

</details>

### User logout
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"user_logout",
  "details":{
    "activity":"user_logout",
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"User",
    "id":4848,
    "name":"janedoen",
    "email":"janedoe@workato.com",
    "email_confirmed_at":"2019-08-01 06:43:54 -0700"
  },
  "timestamp":"2019-09-13 17:24:12 UTC"
}
```

</details>

### Package exported
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"package_exported",
  "details":{

  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Package",
    "id":22483,
    "folder_id":51613,
    "folder_path":"Home/HR recipes",
    "file_name":"hr-recipes_janedoen.zip"
  },
  "timestamp":"2019-09-13 19:56:23 UTC"
}
```

</details>

### Package imported
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"package_imported",
  "details":{

  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Package",
    "id":22484,
    "folder_id":127890,
    "folder_path":"Home/Ray's folder",
    "file_name":"crm-recipes_janedoen.zip"
  },
  "timestamp":"2019-09-13 22:22:24 UTC"
}
```

</details>

### Recipe created
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"recipe_created",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Flow",
    "id":1004058,
    "name":"Copy of Trigger on a specified interval will log message to output",
    "parent_id":1004057
  },
  "timestamp":"2019-09-13 22:28:01 UTC"
}
```

</details>

### Recipe deleted
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"recipe_deleted",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Flow",
    "id":1002617,
    "name":"Trigger on a specified interval will log message to output"
  },
  "timestamp":"2019-09-13 22:23:44 UTC"
}
```

</details>

### Recipe cloned
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"recipe_created",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Flow",
    "id":1004058,
    "name":"Copy of Trigger on a specified interval will log message to output",
    "parent_id":1004057
  },
  "timestamp":"2019-09-13 22:28:01 UTC"
}
```

</details>

### Recipe started
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"recipe_stopped",
  "details":{
    "force":true,
    "error":false,
    "stop_reason":"test_run_stop"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Flow",
    "id":1002398,
    "name":"Trigger on a specified interval will log message to output"
  },
  "timestamp":"2019-09-13 19:55:06 UTC"
}
```

</details>

### Recipe stopped
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"recipe_started",
  "details":{
    "run_once":true,
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Flow",
    "id":1002398,
    "name":"Trigger on a specified interval will log message to output"
  },
  "timestamp":"2019-09-13 19:55:05 UTC"
}
```

</details>

### Folders created
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"folder_created",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Folder",
    "id":131393,
    "name":"Audit log folder",
    "path":"Home/Audit log folder"
  },
  "timestamp":"2019-09-13 22:24:25 UTC"
}
```

</details>

### Folders deleted
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"folder_deleted",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"Folder",
    "id":128098,
    "name":"Customer connection folder",
    "path":"Home/Callable/Customer connection folder"
  },
  "timestamp":"2019-09-13 22:24:58 UTC"
}
```

</details>

### Teams - Invited a team member
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"team_invitation_created",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"MemberInvitation",
    "id":215140,
    "role":"Admin",
    "name":"John",
    "email":"john.doe@workato.com"
  },
  "timestamp":"2019-09-13 19:07:34 UTC"
}
```

</details>

### Teams - Member accepted invite
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"team_invitation_accept",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":61439,
    "handle":"johndoe",
    "email":"john.doe@workato.com",
    "name":"John Doe"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"MemberInvitation",
    "id":215140,
    "role":"Admin",
    "name":"John",
    "email":"john.doe@workato.com"
  },
  "timestamp":"2019-09-13 19:07:57 UTC"
}
```

</details>

### Teams - Switched into team
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"user_login",
  "details":{
    "activity":"switch_team",
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":61439,
    "handle":"johndoe",
    "email":"john.doe@workato.com",
    "name":"john doe"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"User",
    "id":4848,
    "name":"janedoen",
    "email":"janedoe@workato.com",
    "email_confirmed_at":"2019-08-01 21:43:54 +0800"
  },
  "timestamp":"2019-09-13 19:21:50 UTC"
}
```

</details>

### Teams - Switched out of teams
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"user_logout",
  "details":{
    "activity":"switch_team",
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":61439,
    "handle":"johndoe",
    "email":"john.doe@workato.com",
    "name":"john doe"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"User",
    "id":4848,
    "name":"janedoen",
    "email":"janedoe@workato.com",
    "email_confirmed_at":"2019-08-01 06:43:54 -0700"
  },
  "timestamp":"2019-09-13 19:22:33 UTC"
}
```

</details>

### Connections - Connected
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"connection_connected",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"SharedAccount",
    "id":299668,
    "name":"test",
    "provider":"salesforce",
    "authorized":true
  },
  "timestamp":"2019-09-13 18:56:58 UTC"
}
```

</details>

### Connections - Disconnected
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"connection_disconnected",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"SharedAccount",
    "id":299668,
    "name":"test",
    "provider":"salesforce",
    "identity":"janedoe+intacct@workato.com",
    "authorized":false
  },
  "timestamp":"2019-09-13 22:26:31 UTC"
}
```

</details>

### Connections - Created
<details><summary><b>Sample JSON</b></summary>

```json
{
  "event":"connection_created",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"SharedAccount",
    "id":299668,
    "name":"test",
    "provider":"salesforce",
    "authorized":false
  },
  "timestamp":"2019-09-13 18:56:10 UTC"
}
```

</details>

### Connections - Deleted
<details><summary><b>Sample JSON</b></summary>
```json
{
  "event":"connection_deleted",
  "details":{
    "request":{
      "ip_address":"67.207.106.234",
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
    }
  },
  "user":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "team":{
    "id":4848,
    "handle":"janedoen",
    "email":"janedoe@workato.com",
    "name":"janedoen"
  },
  "resource":{
    "type":"SharedAccount",
    "id":295109,
    "name":"My twenty-fourth Salesforce account",
    "provider":"salesforce",
    "authorized":false
  },
  "timestamp":"2019-09-13 22:24:55 UTC"
}
```

</details>
