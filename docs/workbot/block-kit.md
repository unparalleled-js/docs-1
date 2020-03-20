---
title: Block kit
date: 2019-09-16 10:46:00 Z
---

# Block kit in Workbot for Slack

[Block Kit](https://api.slack.com/block-kit) is Slack's UI framework that allows more control and flexibility when building messages for Slack.

You can stack "blocks" and customize the order and appearance of each block, as well as the elements within each block. The table below shows the different types of blocks and the actions which support them.

Blocks can be used in the following Slack surfaces:
| Surface  | Applicable actions               |
|----------|----------------------------------|
| Messages | Post message, post command reply |
| Modals   | Open/update modal, Push modal    |

# Block kit previewer
Preview the messages you've built with the Post message or Post command reply actions by clicking on **See preview on block kit builder** in the block hint.

![Block kit preview](~@img/workbot/workbot-blockkit/block-kit-preview.png)
*Block kit preview link*

![Block kit preview example](~@img/workbot/workbot-blockkit/block-kit-preview-example.png)
*Placeholder info in block kit preview*

# Compatibility with message attachments
Post message and post command reply previously used message attachments to construct messages. Blocks can be used together with message attachments.

You can optionally provide secondary attachments, which will display *below* any defined blocks.

## Behavior of blocks when used with message attachments
- When both blocks and message attachments are defined, blocks will always appear above message attachments.
![Blocks with message attachments](~@img/workbot/workbot-blockkit/blocks-with-message-attachments.png)

- When any blocks are defined, any input in the **Message text** field will be used as the Slack notification message.

![Message text](~@img/workbot/workbot-blockkit/message-text.png)

# Supported blocks
Supported blocks are displayed in the table below.

| Block type                 | Supported actions                                               | Description                                                                                                                                                                                                                                                                                                                  |
|----------------------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Section with text          | Post message, Post command reply, Open/update modal, Push modal | Displays text.                                                                                                                                                                                                                                                                                                               |
| Section with image         | Post message, Post command reply, Open/update modal, Push modal | Displays text alongside an image thumbnail.                                                                                                                                                                                                                                                                                  |
| Section with button        | Post message, Post command reply, Open/update modal, Push modal | Displays text alongside a button. On button submission, a button invokes another recipe and passes on any command input values it has.                                                                                                                                                                                       |
| Section with fields        | Post message, Post command reply, Open/update modal, Push modal | Displays text, along with an array of title-value fields, rendered in 2 columns beneath the section text. Maximum number of fields is 10. Maximum length for the text in each field is 2000 characters.                                                                                                                      |
| Section with select menu   | Post message, Post command reply, Open/update modal, Push modal | Displays text, alongside a select menu. Supports Slack's built-in dynamic menus (Select user, Select conversation, Select channel). For these menus, the ID is passed (e.g. user ID) when an option is chosen.   You can also define your own custom menu, or a dynamic menu (which allows a user to search/filter results). |
| Section with overflow menu | Post message, Post command reply, Open/update modal, Push modal | Displays text, alongside an overflow menu. Supports static or dynamically generated overflow menu options.On submission, an overflow menu option invokes another recipe and passes on any command input values it has.                                                                                                       |
| Section with datepicker    | Post message, Post command reply, Open/update modal, Push modal | Displays text, alongside a date picker. On date selection, a date picker invokes another recipe and passes on the selected date via a date parameter. You can customize the name of this date parameter.You can optionally pass additional command input values together with the date parameter.                             |
| Divider                    | Post message, Post command reply, Open/update modal, Push modal | A content divider, like an , used to split up different blocks inside of a message.                                                                                                                                                                                                                                          |
| Image                      | Post message, Post command reply, Open/update modal, Push modal | Displays an image using a provided public URL.                                                                                                                                                                                                                                                                               |
| File                       | Post message, Post command reply                                | Posts a file based by specifying the Slack file ID.                                                                                                                                                                                                                                                                          |
| Context                    | Post message, Post command reply, Open/update modal, Push modal | Displays message context, which can include both images and texts. All images and texts will be joined together into a single string, in the order they appear in.                                                                                                                                                           |
| Repeat pattern             | Post message, Post command reply, Open/update modal, Push modal | Dynamically generate a pattern of blocks by iterating through a list. First, obtain a list (e.g. List of Salesforce opportunities) and map the datapills to the pattern of blocks. Workato will repeat the pattern of blocks for each item in the list.                                                                      |
| Singleline input           | Open/update modal, Push modal                                   | Displays a text input field to collect info from user. Input value is only passed on view submission.                                                                                                                                                                                                                        |
| Multiline input            | Open/update modal, Push modal                                   | Displays a text area input field to collect info from user. Input value is only passed on view submission.                                                                                                                                                                                                                   |
| Select menu input          | Open/update modal, Push modal                                   | Displays a select menu. Menu option value is only passed on view submission.                                                                                                                                                                                                                                                 |
| Datepicker input           |  Open/update modal, Push modal                                  | Displays a datepicker. Date value is only passed on view submission.                                                                                                                                                                                                                                                         |
| Checkboxes input           | Open/update modal, Push modal                                   | Displays checkboxes. Checkbox values are passed as an array on view submission.                                                                                                                                                                                                                                              |

# Limitations
- Include up to 100 blocks in each message.
