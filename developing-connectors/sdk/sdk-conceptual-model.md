---
title: Developer program
date: 2019-05-08 17:00:00 Z
---
# SDK Conceptual Model

## The basics
In Workato, we allow you to build custom connectors on our SDK using ruby (a coding language). Some basic coding knowledge in any language is recommended but we believe our SDK (Software Development Kit) has been built such that users at any level will be able to build custom connectors. The custom connectors you build can be used in any number of your recipes and you'll also able to share them with your coworkers, friends or even the community at large.

Through out the whole process, you'll be able to build, test and push out your custom connector directly from Workato's platform. This means working directly from the browser you have open right now and never having to install anything onto your computer. Pretty neat right?

Connector source code which you write on the SDK platform will be hosted in Workato's servers and is executed whenever a recipe using that connector is triggered. Before we begin, lets start with a quick overview of what a connector would look like on Workato's SDK.

## Overview
A custom connector on Workato always starts off with curly braces that encapsulates all code (Curly braces look like this `{}`). Inside the curly braces, this is where you'll be able to declare something we call blocks which are basically the named objects followed by another set of curly braces which encapsulates code related to that object. For example, the code `connection: { ... }` is referred to as the `connection:` block.

In the skeleton code below for example, all code related to a custom connector's connection logic will be written inside the object named `connection:`. This is the same for the other objects such as actions and triggers which house the logic for actions and triggers respectively.

Take note that these names are strictly defined and must be spelt exactly for the Workato to know which block to reference when looking to authorise the connector or perform any triggers or actions.. Inside each object, there will be further nested blocked that allow you to declare input fields for connections, actions and triggers which we will cover later on.

## SDK skeleton
```ruby
{
  title: 'My sample connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },
  actions: {
    # Some code here
  },
  triggers: {
    # Some code here
  },
  object_definitions: {
    # Some code here
  },
  picklists: {
    # Some code here
  },
  methods: {
    # Some code here
  },
}
```

## SDK structure
- **title** - This is where you may assign a name to your connector. It should match the title you've given to it on the SDK homepage. The connector is named against the application, e.g. Concur, for SAP concur application.

- **connection** - This is where all connection configurations are stored for your custom connector. You should declare all the properties used in estabilishing the connection, e.g. user name, password, client id, client secret in the fields section. the connection object stores all details proivded on connection form. Inside connection block, the fields section contains all the properties, that are accepted from the user before making connection. the authorization block contains, the type of the authentication used in estabilishing connection, followed by acquire(to get the token) and apply block to set the credentials/headers. We currently support basic, OAuth 2.0 natively as well as a custom authentication that allows you to connect to most other authentication types like digest and multi step authentication procedures.

- **test** - This is where you can define a test to ensure that your connection is valid. When a user attempts to configure a connection on your connector, the test block/method is executed to verify whether a connection has successfully been made.

- **actions** - This is where you define actions that are available to users using your connector. You'll be able to define input fields for users to fill up, the exact mechanics of how the action handles data and the output fields(datapills) of the action so that users can select these outputs for use in later steps.

- **triggers** - This is where you define triggers that people can use with your custom connector. Triggers kick start recipes and can either be implemented via polling (checking every few minutes) or webhooks (static or dynamic). Similar to actions, you'll be able to define user input fields, the mechanics behind how the trigger is executed and the output fields(datapills) of the trigger. Our triggers also provide closure maintenance and pagination capabilities, allowing you to design for users with heavy use cases.

- **object_definitions** - This is where you can define commonly used input or output fields and reference them later on in your actions and triggers to reduce the amount of redundant code that you might have in your SDK. Object definitions are also able to make HTTP calls - allowing you to access metadata endpoints whenever possible to generate dynamic input and output fields.

> Metadata is a common resource in most API's that provide you with data about the data that you can receive. i.e. HubSpot's metadata endpoint provides us with data about the fields that we should expect from a response from them. This is especially useful when users in the application can define custom fields.

- **picklists** - This is where you can define lists of values. Reference them later on when you define input fields that are dropdowns instead of free text fields. Picklists can be static, dynamic based on API requests or even dependant on the previous input of the user.

- **methods** - This is where you can define functions in the same way that you would do in normal coding. Methods can called and then used in most portions of your connector code.

> Functions are pre-defined lines of code that accept input, execute these lines of code based on the input and return the output back to you.

### Walkthrough
Now that we have a basic understanding of how a custom connector looks like code wise, lets start off by building a simple connector.

**[Walkthrough](/developing-connectors/sdk/walk-through.md)**
