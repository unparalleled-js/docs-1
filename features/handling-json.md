---
title: Handling JSON files
date: 2017-04-05 16:00:00 Z
---

# Handling JSON data format

JSON (JavaScript Object Notation) is a syntax for storing data. It is perhaps the most popular and widely used data format in the world of APIs. JSON is based on name/value pairs and arrays, put together in a simple format which makes it highly readable and easily transmitted.

JSON is mostly hidden from regular Workato users because we expose data as input fields and output datapills in the recipe. However, you may occasionally handle JSON data in your specific workflow automation.

Let's use this sample JSON as an example - an array of contacts:

```js
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

## JSON Parser by Workato
The easiest way to convert raw JSON content into a useable datapills is to parse it with the built-in JSON parser. **JSON parser by Workato** is a native application that does not require any connection setup.

Select **App** > **JSON parser by Workato** to get started.

### Parse JSON document

![JSON parser](/assets/images/features/handling-json/json-output-datapill.png)
*JSON parser*

#### Input field

| Input field     | Description |
| --------------- | ----------- |
| Sample document | A sample JSON that has the same format as the JSON document to be parsed. |
| Document        | The input JSON content to be parsed. |

### Output fields
Datapills will be generated according to  the JSON format in the **Sample document**. In our example, an array output is generated, with nested objects `name` and `address`.

## Developing custom connectors
**JSON parser by Workato** excels with off the cuff handling of raw JSON data. However, if you will be frequently interacting with such data. It is advisable to customize a more permanent solution with the **HTTP connector** or **Connector SDK**.

| Custom connector      | Description |
| --------------------- | ----------- |
| HTTP connector        | The HTTP connector is a convenient way to handle raw data from APIs. Refer to our [HTTP connector course](http://resources.workato.com/http-connector/#/?_k=1szm77) for a detailed guide and examples on building HTTP triggers and actions to handle JSON data. |
| Workato connector SDK  | Workato connector SDK is an extension of the Workato framework. It supports a variety of authentication procedures and allows developers to build, maintain and distribute connectors to integration-seekers. Please refer to the main [Workato SDK documentation](/developing-connectors/sdk.md) for more details. |

Refer to our documentation on the [HTTP vs SDK](/developing-connectors/http-vs-sdk.md) for a detailed comparison.
