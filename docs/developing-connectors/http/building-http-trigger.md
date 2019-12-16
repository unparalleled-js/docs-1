---
title: HTTP connector - Building a HTTP trigger
date: 2019-11-17 11:00:00 Z
---

# Building a HTTP trigger
After you have setup your [HTTP connection](/developing-connectors/http/connection-setup.md), you can now configure HTTP triggers.

The HTTP connector supports **New Event via Polling**. Each new/updated record will be processed as a trigger event. If there are more than 100 events within the poll interval, those above 100 may be dropped.

If your use-case requires you to respond immediately to trigger events and your app allows you to create webhooks, you can use a webhooks trigger from the [Webhooks connector](/connectors/workato-webhooks.md).

## New Event via polling
This trigger fetches events at each polling interval. Workato will make a `GET` request to the URL that you provided. The corresponding data returned will be converted into useable datapills in subsequent actions.

<!--- The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://workato.com/princing?audience-general) to find out more. --->

## Input

![New Event via Polling](~@img/developing-connectors/http/new-event-via-polling-trigger.png)
*New Event via Polling*

| Input field     | Description                                      |
| --------------- | ------------------------------------------------ |
| Event name      | The name for this polled event.                  |
| URL             | The HTTP endpoint that you are connecting to.    |
| Request headers | Provide the HTTP request headers, if applicable. |
| Response content type | Select the expected response data type.    |
| Response body example | Provide a sample of the response body. Ensure that this example follows the content type indicated. |

## Output
The output of this trigger depends on the response schema provided.

## HTTP setup documentation
You can also browse the other chapters:

- [Setting up a connection to your app](/developing-connectors/http/connection-setup.md)
- [Building a HTTP action](/developing-connectors/http/building-http-action.md)
