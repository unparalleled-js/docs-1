---
title: Workbot personal connections
date: 2019-05-30 05:00:00 Z
---

# Verify user access at runtime
By default, recipes perform actions based on the identity & permissions of the credentials used to connect the application.

![Connection credentials](~@img/workbot-for-teams/connection-credentials.png)
*A sales manager's credentials used in Salesforce connection*

By verifying user access at runtime, Workbot allows individual users to authenticate themselves before carrying out actions on their behalf in other apps, e.g. asking sales reps to log in to Salesforce before dispatching Workbot to create the opportunity in Salesforce on their behalf.

This ensures that actions carried out by the recipe in the connected apps are done using the authenticated users' identity and permissions.

::: tip
These private connections persist, meaning that user doesn't have to provide credentials every time they use the Workbot command
:::

To enable **Verify user access at runtime**, go to **Recipe > Settings** page and enable **Verify user access at runtime**. Currently, Workbot only supports this functionality for apps with OAuth2 connections, e.g. Salesforce, ServiceNow, Box.

![recipe-setting](~@img/workbot/workbot-latebinding/recipe-settings.png)

When this feature is enabled, Workbot recipes will request individual users to authenticate (i.e. login) to the app, from Teams, before carrying out the app action(s).

![personal-connection-flow-1](~@img/workbot-for-teams/teams-flow-1.png)
*Prompt to connect in Teams. Clicking Login will open a browser tab for you to authorize the connection*

![personal-connection-flow-2](~@img/workbot-for-teams/teams-flow-2.png)
*Authorization*

![personal-connection-flow-3](~@img/workbot-for-teams/teams-flow-3.png)
*Successfully connected*

![personal-connection-flow-4](~@img/workbot-for-teams/teams-flow-4.png)
*Private connection is now registered for your Workbot for Teams account*

# Viewing private connections
Users can view their existing private connections by sending '*personal_connections*' in a DM to Workbot.

![Personal connections - DM 'personal_connections'](~@img/workbot-for-teams/list-personal-connections.png)
*Viewing your private connections*

# Disconnecting or deleting private connections
Users can choose to disconnect or delete their private connections by selecting the connection in the picklist and clicking **Disconnect** or **Delete**.
