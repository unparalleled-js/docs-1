---
title: Workbot personal connections
date: 2017-05-15 05:00:00 Z
---

# Verify user access at runtime
By default, recipes perform actions based on the identity & permissions of the credentials used to connect the application.

![Connection credentials](~@img/workbot/workbot-latebinding/connection-credentials.png)
*A sales manager's credentials used in Salesforce connection*

In the example above, Workbot commands create opportunities in Salesforce — but solely as the sales manager, i.e. the Salesforce connection owner. This means that even though sales reps are creating opportunities in Slack, they would all be reflected as creations of the sales manager in Salesforce. This is also an issue for approvals workflows — approving users need to perform approvals as themselves, not as the connection owner.

By verifying user access at runtime, Workbot allows individual users to authenticate themselves before carrying out actions on their behalf in other apps, e.g. asking sales reps to log in to Salesforce before dispatching Workbot to create the opportunity in Salesforce on their behalf.

This ensures that actions carried out by the recipe in the connected apps are done using the authenticated users' identity and permissions.

::: tip
These private connections persist, meaning that user doesn't have to provide credentials every time they use the Workbot command
:::

To enable **Verify user access at runtime**, go to **Recipe > Settings** page and enable **Verify user access at runtime**. Currently, Workbot only supports this functionality for apps with OAuth2 connections, e.g. Salesforce, ServiceNow, Box.

![recipe-setting](~@img/workbot/workbot-latebinding/recipe-settings.png)

When this feature is enabled, Workbot recipes will request individual users to authenticate (i.e. login) to the app, from Slack, before carrying out the app action.

![personal-connection-flow](~@img/workbot/workbot-latebinding/slack-flow.gif)
*Setting up verify user access at runtime for a Salesforce Approval flow*

# Viewing private connections
Users can view their existing private connections by sending '*connections*' in a DM to Workbot.

![Personal connections - DM 'connections'](~@img/workbot/workbot-latebinding/dm-connections.gif)
*Sending a 'connections' DM to Workbot to view private connections*

Users can also type '*help*'' in the DM, followed by clicking on the *personal accounts* button.

![personal-connection-control](~@img/workbot/workbot-latebinding/manage.gif)
*Viewing private connections*

If Workbot has been invited to their channels, you can use '*@Workbot connections*'' or '*@Workbot help*' to view your private connections in those channels.

# Disconnecting private connections
Users can disconnect their private connections anytime by viewing their private connections and clicking 'Disconnect'.

![Disconnecting personal connections](~@img/workbot/workbot-latebinding/disconnect-personal-connections.gif)
*Disconnecting a private connection*
