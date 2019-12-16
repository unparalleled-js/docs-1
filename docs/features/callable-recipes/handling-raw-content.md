---
title: API endpoint raw content
date: 2019-07-05 18:00:00 Z
---

# REST Endpoint - Raw content
You can configure callable recipes to accept raw content when exposed as a REST endpoint. This allows you to integrate more datatypes (e.g. XML/SOAP and URL Encoded Form) into your workflow.

For example, you can trigger a callable recipe with a raw content body cURL statement:
```bash
curl -X POST 'https://apim.workato.com/API-collection-v1/send-raw-content' \
     -d '<string>' \
     -H 'content-type:text/xml' \
     -H 'API-TOKEN: <YOUR_TOKEN>'
```

## Raw request body
When creating your callable recipe, select **Raw request body**. This configures the recipe to accept any data type.

![Select raw request body](~@img/features/callable-recipes/select-raw-request-body.png)
*Select raw request body*

#### Configuring input
There is no need to configure the input for this action.

#### Output field
| Output Field | Description |
| ------------ | ----------- |
| Request Content type | The `Content-Type` header value from the incoming request. |
| Request body (raw) | The full raw body content. |

Subsequently, you can use Workato parsers for [XML](/features/handling-xml.md), [CSV](features/handling-csv-files.md), [YAML](/features/handling-yaml.md) to convert the raw content into usable datapills. We recommend you to use a [JSON request body](/features/callable-receipes/new-call-trigger.md) when handling JSON data.

In this example below, we are receiving XML content from the API call. We use the XML parser to convert the raw content into useable datapills.

![Receiving raw content and reading it with the XML parser](~@img/features/callable-recipes/example-raw-request-body.png)
*Receiving raw content and reading it with the XML parser. See the full sample recipe [here](https://www.workato.com/recipes/976429).*

## Raw response
You can configure your callable recipe to return raw content (text).
1. Select the **raw response** for your [recipe trigger](/features/callable-recipes/new-call-trigger.md#input-fields) .

![Select raw response](~@img/features/callable-recipes/select-raw-response.png)
*Select raw response*

2. Configure the reply in the **return response action**.

In this example, we are receiving XML content in the API call. We parse the message and use the `File ID` to retrieve a text file from storage. Finally, we return a text file to the calling system.

![Return raw content from a callable recipe](~@img/features/callable-recipes/example-raw-response.png)
*Return raw content from a callable recipe. See the full sample recipe [here](https://www.workato.com/recipes/977033).*

## Test on Workato API Platform
Proceed to setup your recipe's REST endpoint on Workato's API platform. Once done, you can test out your new REST endpoint with raw content.

![Testing REST endpoint with raw content](~@img/features/callable-recipes/example-test-rest-endpoint.png)
*Testing REST endpoint with raw content*
