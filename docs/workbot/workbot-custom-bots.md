---
title: Custom Bots
date: 2018-04-9 10:23:00 Z
---

# What are custom bots?
Custom bots are Slack apps you can use together with Workato for triggers and/or actions. They're useful for when you want to customize your bot for specific functions; giving it a name related to that function, as well as giving it its own icon e.g. HRBot, SupportBot. This allows you greater flexibility in customizing your bot's functionalities and identity.

::: warning Migration to granular scopes
Slack released [granular permissions](https://api.slack.com/docs/token-types#granular_bot) on 22 January 2020. You may have to migrate any pre-existing custom bots you have. See the [migration guide](#moving-to-granular-permission-scopes) for more details.
:::

# Authentication
Custom bots make use of Slack's [V2 OAuth 2.0 flow](https://api.slack.com/authentication/oauth-v2).

### Creating a custom bot
To get started, head to Tools ➤ Workbot like so:

![Tools > Workbot](~@img/workbot/workbot-slash-commands/tools-workbot.png)*If you don't see Workbot, make sure your Workato team or account has access to Workbot*
Under the **Custom** tab, click on **Create a custom bot**.

![Create a custom bot](~@img/workbot/workbot-slash-commands/create-custom-bot.png)*If you don't see the **Custom** tab, make sure your Workato team or account has access to Custom OAuth profiles*

In Step 1, click on **Create new app**.

![Creating a new Slack app](~@img/workbot/workbot-slash-commands/custom-oauth-step-1.png)

This will open a new tab that brings you to https://api.slack.com/apps. Keep both the Workato tab and this new tab open - you'll need both to complete Steps 2 and 3.

Sign in to your team (if you haven't already), then click on **Create New App**.

![Create new app in Slack 1](~@img/workbot/workbot-slash-commands/create-new-app-in-slack-1.png)

In the form that pops up, give your bot a name - it typically describes the functionality of the bot e.g. HRBot or SupportBot.

Choose which Slack team this custom bot belongs to, then click on **Create App**.

![Create new app in Slack](~@img/workbot/workbot-slash-commands/create-new-app-in-slack-2.png)

Your custom bot should now be created! You should be greeted with your new bot's **Basic Information** page. If not - don't sweat it. Just click on **Basic Information** from the left navigation menu.

![New app created](~@img/workbot/workbot-slash-commands/new-app-created.png)

Scroll down to **App Credentials** you'll need this information back on your Workato tab. With this info handy, we can now head back to the Workato tab to complete Step 2.

In Step 2, fill up:
- **Name**: This should be the same name you used to name your custom bot when creating the app e.g. HRBot
- **Client ID**
- **Client secret**
- **Verification token**

It should look like this:

![App credentials](~@img/workbot/workbot-slash-commands/app-credentials-workato.png)

Hit **Save** once you're done. We can now configure your custom bot to talk to Workato in Step 3.

### Configuring your custom bot to talk to Workato
Now that your custom bot has been created, we'll need to configure it to be able to talk to Workato. Step 3 is done completely on your app page on Slack, so let's head back to the Slack tab (you kept it open, right?).

Don't fret if you didn't - you can always head to Tools ➤ Workbot ➤ Custom, and clicking on your custom bot:

![Edit bot profile](~@img/workbot/workbot-slash-commands/edit-bot-profile.png)*Getting back to configuring your custom bot*

#### Setting up OAuth & Permissions
You'll want to allow your custom bot to perform certain functions in your Slack team - so you'll need to set some scopes and permissions for it. On your app page on Slack, from the left navigation menu under **Features**, head over to **OAuth & Permissions**.
![OAuth & Permissions](~@img/workbot/workbot-slash-commands/oauth-permissions.png)

Scroll down to **Redirect URLs** and click on **Add a new Redirect URL**. Copy and add this URL:<br><br> <code>https://www.workato.com/oauth/callback</code><br>

If you get an error like the one below, make sure there are no extra spaces at the start/end of the link. Once you're done, remember to hit **Save URLs**.

![Not a proper link error](~@img/workbot/workbot-slash-commands/not-a-proper-link.png)

Scroll down to **Scopes**, and select the following **Bot Token Scopes**:
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

 ![Bot token scopes](~@img/workbot/workbot-slash-commands/bot-token-scopes.png)

Next, scroll down to **User Token Scopes**, and select the following **User Token Scopes**:
- users:read

![User token scopes](~@img/workbot/workbot-slash-commands/user-token-scopes.png)

Reinstall your app when prompted to.

#### Adding the custom bot as a user in your Slack team
Slack automatically adds a bot user to your app when any bot token scopes are selected, but you can (and should) also make it so that your bot always appears online. From the left navigation menu, under **Features**, head over to **App home**.

- Set the **Display name** and **Default username** as the name of your bot e.g. **HRBot**
- Set **Always Show My Bot as Online** to `ON`

![Adding a bot user](~@img/workbot/workbot-slash-commands/adding-a-bot-user.png)

#### Subscribing to your custom bot events
You'll want your custom bot to subscribe to events related to the channels and conversations they're a part of, so it can respond to them.

From the left navigation menu, under **Features**, head over to **Event Subscriptions** and enable events.

- Copy + paste your custom bot's unique request URL into this field. Jumping back to your open Workato tab, you can find this URL in the Step 3 details, you can find it in the Step 3 details (under the **Go to *Event Subscriptions* and turn <code>ON</code> *Enable Events*** section).

![Events subscription request URL](~@img/workbot/workbot-slash-commands/event-subscriptions-request-url.png)*It should look something like: <code>https://www.workato.com/slack_webhooks/event?coak_id=18</code>*

Scroll down to **Subscribe to bot events**, click on **Add Bot User Event** and add the following events:

- file_shared
- message.channels
- message.groups
- message.im
- message.mpim

![Subscribe to bot events](~@img/workbot/workbot-slash-commands/subscribe-to-bot-events.png)

Click on **Save Changes**.

#### Enabling interactive components
Enabling this allows your custom bot to respond to message buttons, menus or dialogs - by sending these commands to our specified request URL.

- Copy + paste your custom bot's unique request URL into this field. Jumping back to your open Workato tab, you can find this URL in the Step 3 details (under the **Go to the *Interactive Components* section and click on *Enable Interactive Components*** section).

![Interactive components](~@img/workbot/workbot-slash-commands/interactive-components.png)*It should look something like: <code>https://www.workato.com/slack_webhooks/event?coak_id=18</code>*

![Enable interactive components](~@img/workbot/workbot-slash-commands/enable-interactive-components.png)

Click on **Save changes**. Your custom bot is now ready to be installed into your Slack team!

#### Installing your custom bot to your Slack team
Now that you've finished configuring your custom bot, you can now install it to your Slack team. From the left navigation menu, under **Settings**, head over to **Install App**.
- Click on **Install App to Workspace**

![Install app](~@img/workbot/workbot-slash-commands/install-app.png)

Choose your Slack team and authorize it to complete the installation.

Jumping back to your open Workato tab, under Step 3, click on **Done** to finish configuring the custom bot. You should now be prompted to connect this custom bot to your slack team:

![Connect custom bot to Slack team](~@img/workbot/workbot-slash-commands/connect-custom-bot-to-slack-team.png)

- Name your connection
- Click **Connect**
- Choose your Slack team and authorize it to complete the connection.

![Authorize custom bot](~@img/workbot/workbot-slash-commands/authorize-custom-bot.png)

With that, your custom bot is now ready to be used with Workato recipes! You should be able to see your custom bot in your slack team.

![HRBot](~@img/workbot/workbot-slash-commands/hr-bot.png)

You should also be able to use this custom bot with recipes:

![Recipe with custom bot](~@img/workbot/workbot-slash-commands/recipe-with-custom-bot.png)

![Recipe connection to custom bot](~@img/workbot/workbot-slash-commands/recipe-connection-to-custom-bot.png)

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
![Update to granular scopes](~@img/workbot/workbot-slash-commands/navigate-to-granular-scopes.png).

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
