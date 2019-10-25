---
title: Using Workbot for Workplace
date: 2019-10-25 00:00:00 Z
---

# Using Workbot for Workplace
## Workbot commands
You can perform actions in your apps (e.g. creating new Github issues, listing Salesforce opportunities) by sending Workbot commands from within Workplace.

![Command example](/assets/images/workbot-for-workplace/workbot-command-example.png)
*Sending a 'newissue' command with additional parameters in Workplace, then receiving a post reply*

A Workbot command is a trigger that allows you to run a Workbot command recipe.

![New command](/assets/images/workbot-for-workplace/new-command.png)
*Example 'newissue' command in a recipe*

> To learn more about Workbot commands, see [Workbot commands](/workbot-for-workplace/workbot-triggers.md).

### Workbot 'help'
If you get stuck, you can always send the **help** command to Workbot. Workbot will respond with the list of commands available to you.

![Workbot help](/assets/images/workbot-for-workplace/workbot-help.png)
*Asking Workbot for help*

### Invoking Workbot commands in Workplace
Workbot commands can be invoked in 2 distinct ways:
1. Sending the command in a direct message to Workbot or in a channel (in a channel, this requires tagging Workbot i.e. **@workbot your_command**)<br>
![Command recipes](/assets/images/workbot-for-workplace/bot-in-channel.png)<br>*Invoking a Workbot command in channel*
<br>
2. Sending the command when a button is clicked<br>
![Command recipes](/assets/images/workbot-for-workplace/button-click.png)<br>*Clicking a button to invoke a Workbot command*

Commands can also prompt users for additional parameters. For example, to create a new Github ticket, the user should provide the title and description of the incident. In this case, you can add 2 parameters; `title` & `description`. When the command is invoked, Workbot will prompt the user for each parameter.

![Collecting parameters](/assets/images/workbot-for-workplace/collecting-parameters.png)
*Workbot can ask users for info if you specify additional parameters in your command*

## Event notifications using Post message action
Workbot can also be used to notify you when any events occur in your apps. This can be done via the **Post message** action.

![New SNow incident](/assets/images/workbot-for-workplace/new-snow-incident.png)
*A Post reply action notifying user about a new incident in ServiceNow*

The **Post message** & **Post simple message** actions allow you to post a message to a user or in a channel.

![Notification recipe](/assets/images/workbot-for-workplace/notification-recipe.png)
*A recipe where a Post message action notifies the user when a ServiceNow incident is closed*

>To learn more about how the Post message action works, see [Workbot actions](/workbot-for-workplace/workbot-actions.md).

# Learn more
- [Workbot triggers](/workbot-for-workplace/workbot-triggers.md)
- [Workbot actions](/workbot-for-workplace/workbot-actions.md)
