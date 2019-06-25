---
title: Developer program
date: 2019-05-08 17:00:00 Z
---

[![Workato](/assets/images/workato_developer_program.png)](https://www.workato.com)

# Introduction
Here you will find the documentation you need to build custom connectors to applications Workato currently doesn't support using our SDK. Creating your own connector is normally only necessary when our platform has not yet built a connector for the application you are looking for or we dont support the triggers or actions you need. Building a custom connector is made much easier with basic understanding of coding and allows you to connect to any application that has an API exposed. Workato also has custom actions and our own HTTP connectors that might be more suitable if your integration needs aren't so complex. [Learn more about whether to use the SDK, custom actions or our HTTP connection for your integration needs.](/developing-connectors.md)

## What is a custom connector?
A connector allows Workato to interact with a single application through a series of [triggers](/recipes/triggers.md) and [actions](/recipes/actions.md). Triggers monitor for events that occur in the application you hope to connect to and kickstart a workflow of actions which we call a [recipes](/workato-concepts.md#recipes). Actions carry out specific pre-defined operations in the target application.

Connectors built on the SDK are called **custom connectors**. These connectors have a private scope by default which means that they are only visible and available to the connector owner. After the connector is built and ready, you also have the ability to share it with others on various levels.

## Documentation Format
This section will list everything you need to know about our SDK as well as provide some guides, walkthroughs and example connectors that our users have built. You may use the links below to skip ahead to your desired section but it is recommended that you go through this documentation the order stated so as to not miss any of the features we have that might help you down the line.

> In our documentation, we default to JSON when giving examples. It is highly recommended that you read about how other data formats can be handled if the API you plan to connect to uses a different dataformat.

First up, we go through a brief overview of our SDK before getting our feet wet together with a guided walkthrough for our first connector!

* [SDK Conceptual Model](/developing-connectors/sdk-2/SDK-conceptual-model.md)
* [Walkthrough - Building your first connector!](/developing-connectors/sdk-2/walk-through.md)
* [Data Format](/developing-connectors/sdk-2/data-format.md)
  * [JSON](/developing-connectors/sdk-2/data-format/json-format.md)
  * [XML](/developing-connectors/sdk-2/data-format/xml-format.md)
  * [request_format_multipart_form](/developing-connectors/sdk-2/data-format/request_format_multipart_form.md)
  * [Form-url-encoded](/developing-connectors/sdk-2/data-format/form-url-encoded.md)
* [Authentication](/developing-connectors/sdk-2/authentication.md)
  * [Basic Authentication](/developing-connectors/sdk-2/authentication/basic-authentication.md)
  * [Header Authentication](/developing-connectors/sdk-2/authentication/header-authentication.md)
  * [OAuth 2.0](/developing-connectors/sdk-2/authentication/oauth2-authentication.md)
  * [Custom Authentication](/developing-connectors/sdk-2/authentication/custom-authentication.md)
  * [Testing your connection](/developing-connectors/sdk-2/authentication/test.md)
  * [On premises connections](/developing-connectors/sdk-2/authentication/secure_connection.md)
* [Actions](/developing-connectors/sdk-2/action.md)
* [Triggers](/developing-connectors/sdk-2/trigger.md)
  * [Polling triggers](/developing-connectors/sdk-2/trigger/poll-trigger.md)
  * [Static Webhook triggers](/developing-connectors/sdk-2/trigger/static-webhook-trigger.md)
  * [Dynamic Webhook triggers](/developing-connectors/sdk-2/trigger/webhook-trigger.md)  
* [HTTP requests](/developing-connectors/sdk-2/http-requests-and-response-handling.md)
* [Object definitions](/developing-connectors/sdk-2/object-definition.md)
* [Advanced object definitions - Picklists & toggle fields](/developing-connectors/sdk-2/pick-list-toggle-fields.md)
* [Methods](/developing-connectors/sdk-2/methods.md)
* [Error handling](/developing-connectors/sdk-2/error-handling.md)
* [Best Practices](/developing-connectors/sdk-2/best-practices.md)
* [Examples](developing-connectors/sdk-2/examples.md)

## Coming soon
* How-to guides
* Troubleshooting
* Sharing the connector
