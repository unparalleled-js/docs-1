---
title: Workato connectors - Zendesk get ticket details by ID action
date: 2019-05-30 18:00:00 Z
search:
    keywords: ['zendesk', 'ticket', 'details', 'get', 'find']
---

# Zendesk - Get ticket details by ID action
This action retrieves a specific ticket that matches a search by ticket ID. Only records in your Zendesk instance that matches the criteria will be returned.

![Get ticket details by ID action](/assets/images/connectors/zendesk/get-ticket-details-by-id.png)
*Get ticket details by ID action*

### Input fields
| Input field | Description                          |
|-------------|--------------------------------------|
| Ticket ID   | The unique Zendesk ID of the ticket. |

### Output fields
The output of this action contains the full set of columns from the selected ticket. Here are some of the commonly used outputs.

| Output field         | Description                               |
|----------------------|-------------------------------------------|
| Ticket ID            | The unique Zendesk ID of the ticket. This is automatically assigned when the ticket is created. |
| Subject              | The subject of the ticket.                |
| Type                 | The type of ticket. Permitted values are `problem`, `incident`, `question`, or `task`. |
| Priority             | The priority of the ticket. Permitted values are `urgent`, `high`, `normal`, or `low`. |
| Ticket custom fields | Includes data of ticket custom fields(s). |

Click here for a full list of [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields).
