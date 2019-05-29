---
title: Webhooks connector
date: 2019-05-29 10:00:00 Z
---

# Webhooks connector

![Webhooks trigger](/assets/images/webhooks/begin-setup.png)

Webhooks are notifications sent out by an application to a target URL as soon as an event happens. Typically, you can define specific events you wish to receive notifications for.

For example, you can choose to build a webhook trigger that notifies your recipe whenever an order is placed for new customer tickets are marked with status ‘Urgent’, and trigger a workflow to send out an SMS to the account manager for this customer. In this case, the recipe will help to ensure urgent tickets are responded to in a timely fashion.

> **This connector does not require a connection.**

The Workato webhooks gateway listens to all events. When an event is received, the gateway will direct this to the appropriate recipe. This trigger event will result in a job and execute the actions in that recipe.

## Create your own webhook trigger
* [Setup webhook using wizard](/connectors/workato-webhooks/wizard.md)
* [Configure the webhook](/connectors/workato-webhooks/config.md)
* [Debug common errors](/connectors/workato-webhooks/common-errors.md)
