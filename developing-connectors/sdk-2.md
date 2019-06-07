---
title: Developer program
date: 2019-05-08 17:00:00 Z
---

[![Workato](/assets/images/workato_developer_program.png)](https://www.workato.com)

# Introduction

Here you will find the documentation you need to build application connectors using our SDK. Creating your own connector is normally only necessary when our platform has not yet built a connector for the application you are looking for or we dont support the triggers or actions you need. Building a custom connector requires additional work and a basic understanding of coding languages but allows you to connect to any application that has an API exposed. Workato also has custom actions and our own HTTP connectors that might be more suitable if your integration needs aren't so complex. [Learn more about whether to use the SDK, custom actions or our HTTP connection for your integration needs.](/developing-connectors.md)

## What is a custom connector?

A connector allows you to interact with an application. Each connector can have [triggers](/recipes/triggers.md) and/or [actions](/recipes/actions.md). Triggers monitor for events that happen in your app, whilst actions carry out read/write operations with the connected account. Users in Workato are able to build out complex predefined workflows using combinations of a trigger and multiple actions from various applications in what we call [recipes](/workato-concepts.md#recipes).

Connectors built on the SDK are called **custom connectors**. These connectors have a private scope by default. This means that they are only visible and available to the connector owner. After the connector is built and ready, you also have the ability to share it with others on various levels.

## Documentation Format
This section will list everything you need to know about our SDK as well as provide some guides, walkthroughs and example connectors that our users have built. You may use the links below to skip ahead to your desired section but it is recommended that you go through this documentation in this format so as to not miss any of the features we have that might help you down the line.

> In our documentation, we default to JSON when giving examples. It is highly recommended that you read about how other data formats can be handled if the API you plan to connect to requires that.

* [SDK Conceptual Model]()
* [Data Format]()
  * [JSON]()
  * [XML]()
  * [request_format_multipart_form]()
  * [Form-url-encoded]()
* [Authentication]()
  * [Basic Authentication]()
  * [Header Authentication]()
  * [OAuth 2.0]()
  * [Custom Authentication]()
  * [On premises connections]()
* [Triggers]()
  * [Polling triggers]()
  * [Static Webhook triggers]()
  * [Dynamic Webhook triggers]()  
* [Actions]()
* [HTTP requests]()
* [Object definitions]()
* [Picklists]()
  * [Static Picklists]()
  * [Dynamic Picklists]()
* [Methods]()
  * [Whitelisted ruby methods]()
  * [Defining your own methods]()
* [Error handling]()
* [Walkthrough]()
* [How-to guides]()
* [Troubleshooting]()
* [Examples]()
* [Sharing the connector]()
