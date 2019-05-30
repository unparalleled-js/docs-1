---
title: Workbot personal connections
date: 2019-05-30 05:00:00 Z
---

# Workbot personal connections
By default, recipes perform actions based on the identity & permissions of the credentials used to connect the application.

![Connection credentials](/assets/images/workbot/workbot-latebinding/connection-credentials.png)
*A sales manager's credentials used in Salesforce connection*

Using personal connections, Workbot allows individual users to authenticate themselves before carrying out actions for them in other apps, e.g. asking sales reps to log in to Salesforce before dispatching Workbot to create the opportunity in Salesforce on their behalf.

This ensures that actions carried out by the recipe in the connected apps are done using the authenticated users' identity and permissions.

Personal connection persist, meaning that the user doesn't have to provide credentials every time they use the Workbot command.

To enable personal connections, go to **Recipe > Settings** page and enable **Verify user access at runtime**. Currently, Workbot only supports personal connections to apps with OAuth2 connections, e.g. Salesforce, ServiceNow, Box.

![recipe-setting](/assets/images/workbot/workbot-latebinding/recipe-settings.png)

When this feature is enabled, Workbot recipes will request individual users to authenticate (i.e. login) to the app, from Teams, before carrying out the app action(s).

![personal-connection-flow](/assets/images/workbot-for-teams/workbot-latebinding/teams-flow.png)
*Personal connection setup for Salesforce Approval flow*

# Viewing personal connections
You can view your personal connections sending '*personal_connections*' in a DM to Workbot.

![Personal connections - DM 'personal_connections'](/assets/images/workbot-for-teams/dm-connections.gif)
*Sending a 'personal_connections' DM to Workbot to view personal connections*

![Viewing personal connections](/assets/images/workbot-for-teams/manage.gif)
*Viewing personal connections*

# Disconnecting your personal connections
You can disconnect your personal connections anytime by viewing your personal connections and clicking 'Disconnect'.

![Disconnecting personal connections](/assets/images/workbot-for-teams/disconnect-personal-connections.gif)
*Disconnecting a personal connection*
