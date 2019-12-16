---
title: HTTP connector V2
date: 2018-07-23 15:00:00 Z
isTocVisivle: true
---

# HTTP connector V2
The HTTP connector enables integration with any cloud applications that has a HTTP-based API. You can create a new connector as well as add new triggers or actions to existing Workato connectors.

This article covers the V2 HTTP connector, which launched in July 2018. If you are using the V1 HTTP connector (which has been deprecated), refer to the [V1 HTTP connector documentation](http.md).

## What is the HTTP connector and what is it useful for?
The generic HTTP connector allows you to interact with cloud applications with an application program interface (API). This allows you to build additional triggers or actions on the Workato platform to power your integration recipes.

Want to create an invoice in your accounting system? You can make a POST request with a JSON request body. Want to retrieve metrics from your analytics application? You can make a GET request with your query parameters. Want to trigger off upon new leads filling out your online form? Create a webhook trigger that notifies Workato immediately whenever a new lead completes your form.

## HTTP triggers and action
The HTTP connector can be found in the connector picklist. It has 2 triggers and 1 action:

- New event via webhook trigger (real-time)

Workato provides you with an unique target URL to send webhooks to. Webhooks received will be immediately processed by the recipe as a trigger event.

| Type    | Name | Description |
| ------- | ---- | --- |
| Trigger | New event via polling | Workato polls the app endpoint regularly to check for new trigger events. Each new/updated record will be processed by the recipe as a trigger event. |
| Action  | Send Request | Configure a HTTP request to an endpoint and use the response data as datapills. |

> If your use-case requires you to respond immediately to trigger events and your app allows you to create webhooks, you can use a webhooks trigger from the [Webhooks connector](/connectors/workato-webhooks.md).

## HTTP setup documentation
With the HTTP connector, it takes less than 20 minutes to build your own action on Workato. This documentation includes the following chapters:

- [Setting up a connection to your app](/developing-connectors/http/connection-setup.md)
- [Building a HTTP trigger](developing-connectors/http/building-http-trigger.md)
- [Building an HTTP action](developing-connectors/http/building-http-action.md)
