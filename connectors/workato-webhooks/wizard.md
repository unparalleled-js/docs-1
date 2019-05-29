---
title: Webhooks setup wizard
date: 2019-05-29 10:00:00 Z
---

# Webhooks setup wizard

The webhooks wizard makes it very easy to test and configure a webhook trigger for your recipe. It takes you on a guided flow to setup your unique webhooks address, listens to sample webhook events from your app and finally complete the trigger configuration automatically according to a successful event.

> **You may exit this setup wizard at any point if you wish to configure the trigger manually.**

## Begin setup

Begin the setup by choosing the **Webhooks** connector from the list of Apps. The setup wizard prompt will be displayed like in the image below.

![Setup webhook](/assets/images/webhooks/begin-setup.png)
*Setup webhook*

Click on the **Setup webhook** button to start the wizard.

## Generate unique webhook address

![Generate a Workato webhook address](/assets/images/webhooks/generating-webhook-address.gif)
*Generate a Workato webhook address*

At this point you should see the first step of the webhook setup wizard. Here, provide a meaningful event name. This event name will be used to generate a unique webhook address. Click next to start listening for webhook events from your App.

> **To avoid recipes receiving webhook events from multiple sources, the event name must be unique across all your webhook recipes.**

## Test your webhook trigger

![Start listening to webhook events from your App](/assets/images/webhooks/webhook-listening-for-event.png)
*Start listening to webhook events from your App*

When you see this screen, the wizard is now ready to listen for webhook events from you App.

Click on the **Copy URL** button to copy the unique webhook address. This URL should be used to register as the webhook URL in your App. For example, register URL as the **Payload URL** in Eventbrite.

![Add a webhook in Eventbrite to send data to the webhook trigger](/assets/images/webhooks/register-webhook-url.png)
*Add a webhook in Eventbrite to send data to the webhook trigger*

## Complete webhook setup

When a webhook is successfully sent and received by Workato, you will see this screen.

![Webhook event received](/assets/images/webhooks/webhook-event-received.png)
*Webhook event received*

Inspect the webhook headers and payload to make sure that the correct event is received. This sample webhook event serves as the template for all future events. Workato uses the payload and header data to configure the other parts of the trigger.

> **Click on Save and skip, if you wish to configure the trigger manually.**

When you are satisfied, click on the **Setup webhook** button at the top right to complete the setup.

## Webhook trigger configured

The trigger is now fully configured ready. Continue to build the rest of the recipe.

![Configured-webhook-trigger](/assets/images/webhooks/configured-webhook-trigger.png)
*Configured-webhook-trigger*
