---
title: Workato connectors - Zendesk get list of tickets by external ID action
date: 2019-05-30 18:00:00 Z
search:
    keywords: ['zendesk', 'ticket', 'get', 'find', 'list', 'external id']
---

# Zendesk - Get list of tickets by external ID action
This action retrieves a list of tickets that matches a search by external ID. Only records in your Zendesk instance that matches all the criteria will be returned

![Get list of tickets by external ID action](/assets/images/connectors/zendesk/get-ticket-external-id.png)
*Get list of tickets by external ID action*

### Input fields
| Input field | Description |
|-------------|-------------|
| External ID | The external ID of the ticket(s). You can query multiple external IDs with the `,` separator. |

### Output fields
The output of this action contains the full set of columns from the list of tickets. Here are some of the commonly used outputs.

| Output field         | Description                               |
|----------------------|-------------------------------------------|
| Ticket ID            | The unique Zendesk ID of the ticket. This is automatically assigned when the ticket is created. |
| Subject              | The subject of the ticket.                |
| Type                 | The type of ticket. Permitted values are `problem`, `incident`, `question`, or `task`. |
| Priority             | The priority of the ticket. Permitted values are `urgent`, `high`, `normal`, or `low`. |
| Ticket custom fields | Includes data of ticket custom fields(s). |
| List size            | The size of the list, corresponding to the number of tickets retrieved. |

Click here for a full list of [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields).
