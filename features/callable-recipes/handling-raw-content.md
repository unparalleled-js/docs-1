---
title: API endpoint raw content
date: 2019-07-05 18:00:00 Z
---

# REST Endpoint - Raw content
When configuring callable recipes for API endpoint, you have the option to use **raw content** for the body parameters. With this, your callable recipes can interact with more data types (e.g. XML/SOAP).

Standard JSON cURL statement:
```
curl -X POST \
     -d '{"param1":"value1","param2":"value2"}' \
     -H 'API-TOKEN: <YOUR_TOKEN>' 'https://apim.workato.com/API-collection-1/send-json-content'
```

Raw content body cURL statement (example with `text/xml`:
```
curl -X POST \
     -d '<string>' \
     -H 'content-type:text/xml' \
     -H 'API-TOKEN: <YOUR_TOKEN>' 'https://apim.workato.com/API-collection-1/send-raw-content'
```

## Raw request body
When creating your callable recipe, configure the **Request type** to **Raw request body**.

![Select raw request body](/assets/images/features/callable-recipes/select-raw-request-body.png)
*Select raw request body*

#### Configuring input
This configures the recipe to interact with data not formatted with JSON parameters. There is no need to configure the input for this action.

#### Output field
| Output Field | Description |
| ------------ | ----------- |
| Request Content type | The `Content-Type` header value from the incoming request. |
| Request body (raw) | The full raw body content. |

Subsequently, you can use Workato parsers for [XMl](/features/handling-xml.md), [CSV](features/handingling-csv-files.md), [YAML](/features/handling-yaml.md) to convert the raw content into usable datapills. We recommend you to use a [JSON request body](/features/callable-receipes/new-call-trigger.md) when handling JSON data.

In this example, we are receiving XML content from the API call. We use the XML parser to convert the raw content into useable datapills.

![Receiving raw content and reading it with the XML parser](/assets/images/features/callable-recipes/example-raw-request-body.png)
*Receiving raw content and reading it with the XML parser. See the full sample recipe [here](https://www.workato.com/recipes/976429).*

## Raw response
You can configure your callable recipe to return raw content (text).
1. Select **raw response** for the recipe's [reply type](/features/callable-recipes/new-call-trigger.md#input-fields).
2. Configure the reply in the **return response action**.

In this example, we are receiving XML content in the API call. We parse the message and use the `File ID` to retrieve a text file from our system and returns it to the calling system.

![Return raw content from a callable recipe](/assets/images/features/callable-recipes/example-raw-response.png)
*Return raw content from a callable recipe. See the full sample recipe [here](https://www.workato.com/recipes/977033).*

## Test on Workato API Platform
Proceed to setup your recipe's REST endpoint on Workato's API platform. Once done, you can test out your new REST endpoint with raw content.

![Testing REST endpoint with raw content](/assets/images/features/callable-recipes/example-test-rest-endpoint.png)
*Testing REST endpoint with raw content*
