---
title: Workbot actions for MS Teams
date: 2019-09-04 05:00:00 Z
---

# Workato actions for MS Teams
Workbot actions allow you to post messages & replies to users or channels as Workbot.

Additionally, Workbot also includes custom actions. This action allows you to utilize [Microsoft Graph APIs (v1.0)](https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0).

Workbot supports 3 actions:
* [Post reply](#post-reply)
* [Post message](#post-message)
* Custom action

## Post reply
Post reply allows you to post a message back to a user when a Workbot command is invoked. Replies are posted directly to the user or in-channel, depending on where the command was invoked.

![Post reply](~@img/workbot-for-teams/post-reply.png)
*Example of a post reply listing open opportunities from Salesforce*

This reply can be a simple text message about a task's completion, or more advanced like prompting users on subsequent actions.

You can optionally include 1 fact set (a set of name-value pairs), 1 pick list, buttons and images.

>**Post reply must always be paired with a Workbot command**

![Post reply recipe](~@img/workbot-for-teams/post-reply-recipe.png)
*Recipe perspective of the post reply example above*

## Post message
The post message actions allows you to post a message to a user or a channel. It is similar to **Post reply**, but with an additional field called **Message recipient**. This field allows you to specify where to post the message (direct to user, or to channel).

Use post message if you:

1. Are using Workbot to post event notifications from another application, e.g. New/updated incident in ServiceNow. Since the trigger is not a Workbot command, **Post message** must be used so you can specify the 'Message recipient' for the event.

2. Want control over where Workbot should post the message, instead of sending it where the Workbot command was invoked (which is what **Post reply** does automatically)

3. Want to use advanced features like updating a previous message.

### Message recipient
**Message recipient** allows you post a message to directly to a user or to a channel you specify. Use the <kbd>ID</kbd> datapill (under **Conversation**) from the output of a Workbot command. To pick a member or channel instead, toggle to "Select from list".

![Message recipient](~@img/workbot-for-teams/message-recipient.png)
*Message recipient example*

## Advanced section
 The advanced section has 2 fields: **Post as raw JSON** and **Message to update**.

### Post as raw JSON
  This field is for advanced users who want to fully customize the message formatting. When set to **Yes**, all other fields will be hidden. Should include <code>"type": "message"</code>, followed by <code>"attachments"</code>, e.g.
```json
{
    "type": "message",
    "attachments": [
        {
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
                "type": "AdaptiveCard",
                "version": "1.0",
                "body": [
                    {
                        "type": "TextBlock",
                        "text": "Hello World!",
                        "size": "large"
                    }
                ]
            }
        }
    ]
}
```
For more details, refer to [Microsoft's Adaptive Card Designer](https://adaptivecards.io/designer).

### Message to update
**Message to update** allows you to overwrite a previously posted message from an earlier action step. Simply use the <kbd>Original message ID</kbd> datapill (from the output of a Workbot command), or the <kbd>ID</kbd> datapill (from the output of a **Post message** or **Post reply** action).

![Original message ID](~@img/workbot-for-teams/original-message-id.png)
*Original message ID*

![Message to update example](~@img/workbot-for-teams/message-to-update.png)
*Message to update*

## Input fields
![Post reply fields](~@img/workbot-for-teams/post-reply-fields.png)
*Post reply & Post message follow the same message structure*

Both post reply and post message actions follow a fixed structure, with a preceding **Envelope text** and **Message container**. Text input fields support markdown syntax.

The table below lists the input fields in the post reply action.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Group</th>
            <th>Input</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td>Envelope text&ast;</td>
            <td>
                First message, preceding any text, images, or other elements in the message container. Support markdown.
            </td>
        </tr>
        <tr>
            <td rowspan="4">Heading*</td>
            <td>Heading</td>
            <td>Heading text.</td>
        </tr>
        <tr>
            <td>Subheading&ast;</td>
            <td>Subheading text. Supports markdown.</td>
        </tr>
        <tr>
            <td>Link text&ast;</td>
            <td>
                Use markdown to add text links, e.g. <code>[Salesforce](https://www.salesforce.com/)</code>.
            </td>
        </tr>
        <tr>
            <td>Heading thumbnail</td>
            <td>
                Provide image URL of thumbnail. Displays to the left of heading text.
            </td>
        </tr>
        <tr>
            <td rowspan="2">Body&ast;</td>
            <td>Body text</td>
            <td>
                Main body text of message. Supports markdown.
            </td>
        </tr>
        <tr>
            <td>Image</td>
            <td>
                Provide image URL. Displays below body text.
            </td>
        </tr>
        <tr>
            <td rowspan="2">Fact set</td>
            <td>Text*</td>
            <td>Title of fact.</td>
        </tr>
        <tr>
            <td>Value&ast;</td>
            <td>Value of fact.</td>
        </tr>
        <tr>
            <td rowspan="5">Pick list</td>
            <td>Pick list name&ast;</td>
            <td>
                Name of picklist. Displays before choices.
            </td>
        </tr>
        <tr>
            <td>Pick list style</td>
            <td>
                Compact displays choices in a drop-down menu, while Expanded displays all choices with radio buttons.
            </td>
        </tr>
        <tr>
            <td>Choice parameter</td>
            <td>
                Parameter name to store the choice value. This is a required field when <a href="https://docs.workato.com/workbot-for-teams/passing-parameters.html">passing parameters</a> to another recipe, otherwise the value will not be passed.
            </td>
        </tr>
        <tr>
            <td>Title</td>
            <td>Text to display for choice. Cannot contain <code>:</code> or <code>,</code>.</td>
        </tr>
        <tr>
            <td>Value</td>
            <td>
                Value to pass to <b>Choice parameter</b> if chosen. Cannot contain <code>:</code> or <code>,</code>.
            </td>
        </tr>
        <tr>
            <td rowspan="4">Buttons</td>
            <td>Prompt text for buttons*</td>
            <td>
                Prompt that displays before buttons. Useful in providing context for the buttons that follow.
            </td>
        </tr>
        <tr>
            <td>Button text</td>
            <td>
                Text to be displayed on the button.<br><br><img src="~@img/workbot-for-teams/create-ticket-button.png"></img><br><br>
            </td>
        </tr>
        <tr>
            <td>Submit button command</td>
            <td>
                Workbot command to execute when button is clicked, e.g. <code>create_ticket</code>. Only after <a href="https://docs.workato.com/workbot-for-teams/workbot-triggers.html#configuring-the-command">configuring the command</a> in a Workbot for MS Teams trigger block can that command be visible in the dropdown list.
            </td>
        </tr>
        <tr>
            <td>Additional parameters</td>
            <td>
                Parameter values to be passed onto the next recipe when button is clicked, e.g. <br><br><pre>{<br>  "sys_id": "<kbd>sys_id</kbd>"<br>  "summary": "<kbd>Summary</kbd>",<br>  "description": "<kbd>Description</kbd>"<br>}</pre>
                Datapills need to be wrapped in double quotes and parameter names must be in all lowercase. Parameters can be user-specified, like the urgency of an issue in ServiceNow, or recipe information, like the Message ID of a previous MS Teams message.
            </td>
        </tr>
        <tr>
            <td rowspan="2">Advanced</td>
            <td>Post as raw JSON</td>
            <td>
                For advanced users to fully customize the message formatting.
            </td>
        </tr>
        <tr>
            <td>Message to update</td>
            <td>
                Use message ID from the output of a post reply or post message action to update that message with this one.
            </td>
        </tr>
    </tbody>
</table>
&ast;Supports markdown

## Using dynamic lists in action fields
Fact sets, pick lists and buttons can be generated dynamically using a list datapill (for more information on lists, see the [list management guide](/features/list-management.md))

From the fields, click on the horizontal ellipses on the top-right and choose 'Dynamic list'. This should bring up the dynamic list option.

![Dynamic buttons](~@img/workbot-for-teams/dynamic-buttons.png)

The following table shows what goes into the dynamic buttons fields:

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>Buttons source list</td>
          <td>
            List datapills have a list icon next to them in the datatree, e.g. Salesforce users:<br>
            <img src="~@img/workbot-for-teams/list-datapill.png"></img>
          </td>
        </tr>
        <tr>
          <td>Button text</td>
          <td>
            The title of the button to be displayed. Typically, you want to use datapills from the list datapill, e.g. Salesforce user name, a datapill from the Salesforce users list:
            <img src="~@img/workbot-for-teams/dynamic-button-title.png"></img>
          </td>
        </tr>
        <tr>
          <td>Submit button command</td>
          <td>
            Choose from a list of existing Workbot command recipes or key in a new command. Clicking on this button will trigger the recipe with the corresponding command trigger.
          </td>
        </tr>
        <tr>
          <td>Additional parameters</td>
          <td>
            Key in name-value pairs to pass onto the next recipe as additional parameters. Format should be JSON with name-value pairs, e.g.<br><br><pre>{<br>  "opportunity_id": "<kbd>Opportunity ID</kbd>",<br>  "stage": "<kbd>Stage</kbd>"<br>}</pre>
            Datapills need to be wrapped in double quotes and parameter names must be in all lowercase. Parameters can be user-specified, like the urgency of an issue in ServiceNow, or recipe information, like the Message ID of a previous MS Teams message.
          </td>
        </tr>
      </tbody>
    </table>

# Learn more
- [Using Workbot for MS Teams](/workbot-for-teams/using-workbot-for-teams.md)
- [Workbot triggers](/workbot-for-teams/workbot-triggers.md)
- [Passing parameters](/workbot-for-teams/passing-parameters.md)

[//]: # (The above links to passing-parameters.md are not live yet.)
