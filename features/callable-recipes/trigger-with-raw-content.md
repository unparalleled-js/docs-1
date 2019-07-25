---
title: API platform raw cotent
date: 2019-07-05 18:00:00 Z
---

# API Platform - Raw content
Callable recipes are recipes that can be called upon to perform its action independent. The request can be triggered by:
- another Workato recipe[]()
- an API endpoint from another system.[]()

For an API endpoint, you have the option to use raw body content for the body parameters. This configures the recipe to accept raw content, allowing it to receive and interact with more data types (e.g. XML/SOAP). 

Standard cURL statement:
```
curl -X POST \
     -d '{"param1":"value1","param2":"value2"}' \
     -H 'API-TOKEN: <YOUR_TOKEN>' 'https://apim.workato.com/API-collection-1/send-json-content'
```

Raw content body cURL statement (example with `text/xml`:
```
curl -X POST \
     -d '<string>' \
     -H 'content-type:text/xml'
     -H 'API-TOKEN: <YOUR_TOKEN>' 'https://apim.workato.com/API-collection-1/send-raw-content'
```


## Raw request body
When creating your callable recipe, you can define the **Request type** for this recipe. Select **Raw request body**.

![Select raw request body](/assets/images/features/callable-recipes/select-raw-request-body.png)
*Select raw request body*

This configures the recipe to interact with data not formatted with JSON parameters. The outputs of this trigger are:

| Output Field | Description |
| ------------ | ----------- |
| **Request**<br>Content type | `Content-Type` header value from the incoming request. |
| **Request**<br>Request body (raw) | The full raw body content. |

Subsequently, you can use the native parsers for [XMl], [CSV], [YAML] to convert the raw content into usable datapills. We recommend you to use a [JSON request body](/features/callable-receipes/new-call-trigger.md) when handling JSON data. 

## Raw response
Select **Raw response** when configuring the [trigger](/features/callable-recipes/new-call-trigger.md) to return raw content (text) from your callable recipe. Next, add a **return response action** to the callable recipe.

![Raw response body](assets/images/features/callable-recipes/raw-response-body.png)
*Raw response body*

Proceed to **API platform** > **API Endpoint** to test out your new raw content-supported callable recipe.

