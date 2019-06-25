---
title: Workato connectors - Zendesk create ticket action
date: 2019-05-30 18:00:00 Z
search:
    keywords: ['zendesk', 'ticket', 'create']
---

# Zendesk - Create ticket action
This action creates a single ticket into your Zendesk instance.

![Create ticket action](/assets/images/connectors/zendesk/create-ticket-action.png)
*Create ticket action*

### Input fields
Here are some of the commonly used inputs.

| Input field | Description                                       |
|-------------|---------------------------------------------------|
| Ticket form | Select a ticket form to use preconfigured custom fields. |
| Comment     | A description of the ticket.                      |
| Subject     | The subject of the ticket.                        |
| Type        | The type of ticket. Permitted values are `problem`, `incident`, `question`, or `task`. |
| Priority    | The priority of the ticket. Permitted values are `urgent`, `high`, `normal`, or `low`. |
| Status      | The status of the ticket. Permitted values are `>open`, `pending`, `hold`, `solved`, or `closed`. |
| Tags       | The tags applied to this ticket. You can add multiple tags with the `,` separator. |
| Ticket custom fields | Provide data for ticket custom field(s). |

Click here a full list of [ticket inputs](/connectors/zendesk/ticket-fields.md#ticket-input-fields).

### Output fields
The output of this action contains the full set of columns from the selected ticket. Here are some of the commonly used outputs.

| Output field | Description                                       |
|--------------|---------------------------------------------------|
| Ticket ID    | The unique Zendesk ID of the ticket. This is automatically assigned when the ticket is created. |
| Subject      | The subject of the ticket.                        |
| Type         | The type of ticket. Permitted values are `problem`, `incident`, `question`, or `task`. |
| Priority     | The priority of the ticket. Permitted values are `urgent`, `high`, `normal`, or `low`. |
| Ticket custom fields | Includes data of ticket custom fields(s). |

Click here for a full list of [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields).
