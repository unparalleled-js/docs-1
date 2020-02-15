---
title: Migration to granular permission scopes
date: 2020-02-15 08:00:00 Z
---

# Moving to granular permission scopes
On 22 January 2020, Slack released [granular permissions](https://api.slack.com/docs/token-types#granular_bot), deprecating the old `bot` scope.

Previously, bot users were special and required the umbrella `bot` scope. Now, new Slack apps can request individual scopes for their bot users.

If you had custom bots before 22 January 2020, there's a high chance it has the `bot` scope and **will require migration to the new scopes** by **late 2021**. You can check whether your custom bot has the `bot` scope by heading over to your app management page (note that you either have to be the app creator or collaborator to have access to this page), and looking under **OAuth & Permissions**.

## Migration timeline
- **February 21, 2020**
Slack will require any **NEW** apps to use granular permissions. There's no real action on your part - just be aware that if you create any new custom bots, it's normal for them to have different scopes than your old bots.

- **Late 2021**
Existing apps that have not upgraded will be assessed by Slack and conversations involving those apps will be delisted by them. We strongly recommend that you migrate your custom bot way before this time.

## What happens if I don't update my custom bot's scopes?
By late 2021, conversations involving your custom bot may be delisted by Slack upon their assessment. It's highly recommended to do it way before that - especially since migration is easy.

## Will any of my bot functionality be affected before/after migration?
For the most part, **no**. [SCIM APIs](https://api.slack.com/scim), [Web APIs](https://api.slack.com/web), the [Events API](https://api.slack.com/events-api) and all related methods are compatible with both old and new bot tokens.

However, the [RTM API](https://api.slack.com/rtm) is not accessible to the new bot tokens (and hence aren't usable after migration). If your app requires RTM functionality, Slack has advised **not** to perform this migration for your app.

## Migrating to the new scopes
On your app management page on Slack, head over to **Update to Granular Scopes**.
![Update to granular scopes](~@img/workbot/workbot-slash-commands/navigate-to-granular-scopes.png)

In Step 1, select the following bot token scopes:
- channels:history
- channels:read
- chat:write
- commands
- files:read
- files:write
- groups:history
- groups:read
- im:history
- im:write
- mpim:history
- users:read
- users:read.email

Click **Continue**.

In Step 2, select the following user token scopes:
- users:read

Click **Continue**.

In Step 3, verify your scope selections, then click on **Yes, migrate my app**.

In Step 4, you do not have to change your OAuth code as it is handled by Workato. Click on **I've updated my app**.

For more information on migrating your app, you can head over to [Slack's migration guide](https://api.slack.com/authentication/migration#update_ui).
