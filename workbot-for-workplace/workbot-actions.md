---
title: Workbot for Workplace actions
date: 2019-10-25 00:00:00 Z
---

# Workbot for Workplace actions
Workbot actions allow you to post messages & replies to users or channels as Workbot.

Additionally, Workbot also includes custom actions. This action allows you to utilize [Facebook's Graph APIs (v4.0)](https://developers.facebook.com/docs/graph-api/).

Workbot supports 6 actions:
* [Post simple reply](#post-simple-reply)
* [Post simple message](#post-simple-message)
* [Post reply](#post-reply)
* [Post message](#post-message)
* [Post attachment](#post-attachment)
* Custom action

## Post simple reply
Post simple reply allows you to post a simple text message back to the user that invokes a Workbot command. Replies are posted directly to the user or in-channel, depending on where the command was invoked.

> **Post simple reply must be used together with a Workbot command**

![Post simple reply](/assets/images/workbot-for-workplace/post-simple-reply.png)
*Example of a post simple reply*

You can optionally include quick reply buttons, which are displayed below the message and can invoke another Workbot command recipe when clicked by a user.

## Post simple message
Post simple message allows you to post a simple text message to a user or channel, without having to use a Workbot command as the trigger. It is similar to **Post reply**, but with an additional field called **Send message to**. This field allows you to specify where to post the simple message (direct to user, or to channel).

Since the trigger event can come from another application (e.g. new incident in ServiceNow), **Post simple message** is useful in posting Workplace notifications for events that occur in another application.

![Post simple message](/assets/images/workbot-for-workplace/post-simple-message.png)
*Example of a post simple message*

You can optionally include quick reply buttons, which show below the text message and can invoke another Workbot command recipe when clicked by a user.

Use post simple message if you:

1. Are using Workbot to post simple event notifications from another application, e.g. New/updated incident in ServiceNow. Since the trigger event can come from another application, **Post message** should be used, so you can specify who to send the message to.

2. Want control over where Workbot should post the message, instead of sending it where the Workbot command was invoked (which is what **Post reply** does automatically)### Send message to
**Send message to** allows you post a message to directly to a user or to a channel you specify. Use the <kbd>ID</kbd> datapill (under **Conversation**) from the output of a Workbot command. To pick a member or channel instead, toggle to "Select from list".

![Send message to](/assets/images/workbot-for-workplace/send-message-to.png)
*Send message to example*

## Post reply
Post reply allows you to post a reply back to the user that invokes a Workbot command. Replies are posted directly to the user or in-channel, depending on where the command was invoked.

> **Post reply must be used together with a Workbot command**

![Post reply](/assets/images/workbot-for-workplace/post-message.png)
*Example of a post reply*

The **Post reply** action uses Facebook's [generic template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic/).

You can optionally include quick reply buttons, which are displayed below the message and can invoke another Workbot command recipe when clicked by a user.

## Post message
Post message allows you to post a message to a user or channel, without having to use a Workbot command as the trigger. It is similar to **Post reply**, but with an additional field called **Send message to**. This field allows you to specify where to post the message (direct to user, or to channel).

Since the trigger event can come from another application (e.g. new incident in ServiceNow), **Post message** is useful in posting Workplace notifications for events that occur in another application.

![Post message](/assets/images/workbot-for-workplace/post-message.png)
*Example of a post message*

The **Post message** action uses Facebook's [generic template](https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic/).

You can optionally include quick reply buttons, which show below the text message and can invoke another Workbot command recipe when clicked by a user.

Use post message if you:

1. Are using Workbot to post event notifications from another application, e.g. New/updated incident in ServiceNow. Since the trigger event can come from another application, **Post message** should be used, so you can specify who to send the message to.

2. Want control over where Workbot should post the message, instead of sending it where the Workbot command was invoked (which is what **Post reply** does automatically)### Send message to
**Send message to** allows you post a message to directly to a user or to a channel you specify. Use the <kbd>ID</kbd> datapill (under **Conversation**) from the output of a Workbot command. To pick a member or channel instead, toggle to "Select from list".

![Send message to](/assets/images/workbot-for-workplace/send-message-to.png)
*Send message to example*

## Post attachment
The **Post attachment** action allows you to post images, videos, audio, or files to a user by specifying the attachment URL.

![Post attachment](/assets/images/workbot-for-workplace/post-attachment.png)
*Post attachment recipe view*

![Sharing the Workplace logo](/assets/images/workbot-for-workplace/sharing-workplace-logo.png)
*Logo shared in WorkChat*

# Web URL buttons
Buttons can also open an external URL, by specifying their type as **Web URL**, followed by the URL to redirect the user to.

![Web URL button](/assets/images/workbot-for-workplace/web-url-button.png)
*Button configured as a web URL button*

# Learn more
- [Using Workbot for Workplace](/workbot-for-workplace/using-workbot-for-workplace.md)
- [Workbot triggers](/workbot-for-workplace/workbot-triggers.md)

[//]: # (The above links to passing-parameters.md are not live yet.)
