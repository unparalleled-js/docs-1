---
title: Callable recipe trigger with raw cotent
date: 2019-07-05 18:00:00 Z
---

# Callable recipe trigger - Raw content
Callable recipes are a type of recipe that can be called upon to perform its action independently of the source request. The request can be triggered from:
- Another Workato recipe[]()
- A REST endpoint from another system.[]()

For an API endpoint, you have the option to use raw body content for the body parameters. Raw body content refers to the ability for you to document APIs that have no named JSON parameters. 

It transforms standard cURL statements:
```
curl -X POST \
     -d '{"param1":"value1","param2":"value2"}' \
     -H 'API-TOKEN: <YOUR_TOKEN>' 'https://apim.workato.com/API-collection-1/send-json-content'
```

Into a one that accepts raw body content:
```
curl -X POST \
     -d '<string>' \
     -H 'API-TOKEN: <YOUR_TOKEN>' 'https://apim.workato.com/API-collection-1/send-raw-content'
```


