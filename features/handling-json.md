---
title: Handling JSON files
date: 2017-04-05 16:00:00 Z
---

# Handling JSON data format

JSON (JavaScript Object Notation) is a syntax for storing data. It is perhaps the most popular and widely used data format in the world of APIs. JSON is based on name/value pairs and arrays, put together in a simple format which makes it highly readable and easily transmitted.

JSON is mostly hidden from regular Workato users because we expose data as input fields and output datapills in the recipe. However, you may occassionally have to work with JSON data in your specific workflow automation. 

## JSON Parser by Workato
The easiest way to convert JSON content into a format that can be used in Workato recipes is to parse it using the bulti-in Workato parser.**JSON parser by Workato** is a native application that allows you to read raw JSON. 

### Connection setup
No connection setup is required. Simply select **App** > **JSON parser by Workato** to get started.

![JSON parser by Workato](/assets/images/features/json-parser-by-workato.png)
*JSON parser by Workato*

### Parse JSON document

![image](link)
*caption*

| Input field | Description |
| --- | --- |
| Sample document | A sample JSON that has the same format as the JSON document to be parsed. |
| Document | The input JSON content to be parsed. |

Let's use the following JSON that represents an array of contacts.

```JSON
[
  {
    "Name" : {
      "first_name" : "Sally",
      "last_name" : "Jones"
    },
    "Address": {
      "street" : "20450 Stevens Creek Blvd #150",
      "city" : "Cupertino",
      "st" : "CA",
      "postal": "95014"
    },
    "phone" : "4105554119"
  },
  {
    "Name" : {
      "first_name" : "Bob",
      "last_name" : "Towner"
    },
    "Address": {
      "street" : "1 Hacker Way",
      "city" : "Menlo Park",
      "st" : "CA",
      "postal": "94025"
    },
    "phone" : "8552982507"
  }
]
```

An array output is generated, with nested objects `name` and `address`.

![Outputs from parse JSON action](/assets/images/features/hanling-json/json-output-datapill.png)
*Outputs from parse JSON action*

## Developing custom connectors
**JSON parser by Workato** excels with off the cuff handling of raw JSON data. However, if you will be frequently interacting with such data. It is advisable to customize a more permanent solution with the **HTTP connector** or **Connector SDK**.

- HTTP connector

The HTTP connector is a convenient way to handle raw data from APIs. Refer to our [HTTP connector course](http://resources.workato.com/http-connector/#/?_k=1szm77) for a detailed guide and examples on building HTTP triggers and actions to handle JSON data.

- Workato connector SDK

Workato connector SDK is an extension of the Workato framework. It supports a variety of authentication procedures and allows developers to build, maintain and distribute connectors to integration-seekers. Please refer to the main [Workato SDK documentation](/developing-connectors/sdk.md) for more details.

- Which should I use?

Refer to our documentation on the [HTTP vs SDK](/developing-connectors/http-vs-sdk.md) for a detailed comparison.
