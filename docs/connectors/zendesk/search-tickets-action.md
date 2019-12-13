---
title: Workato connectors - Zendesk search tickets action
date: 2019-05-30 18:00:00 Z
search:
    keywords: ['zendesk', 'ticket', 'search', 'find']
---

# Zendesk - Search tickets action
This action retrieves a list of all tickets that matches your search criteria. Only records in your Zendesk instance that matches all the criteria will be returned.

![Search tickets action](~@img/connectors/zendesk/search-ticket-action.png)
*Search tickets action*

### Input fields
| Input field  | Description                                   |
|--------------|-----------------------------------------------|
| Status       | The status of the ticket. Permitted values are `>open`, `pending`, `hold`, `solved`, or `closed`. |
| Type         | The type of the ticket. Permitted values are `problem`, `incident`, `question`, or `task`. |
| Priority     | The priority of the ticket. Permitted values are `urgent`, `high`, `normal`, or `low`. |
| Subject      | The subject of the ticket.                    |
| Description  | The description of the ticket.                |
| Earliest created time | The earliest the ticket was created. |
| Latest modified time | The latest the ticket was updated.    |
| Requester    | The requester of the ticket. You can define users with the full name, user ID, email, or phone number. You can also use 'none' and 'me'. |
| Submitter    | The submitter of the ticket. You can define users with the full name, user ID, email, or phone number. You can also use 'none' and 'me'. |
| Organization | The organization of the requester. You can define the organization with the name or organization ID. You can also use 'none' and 'me'. |
| Tags         | The tags applied to this ticket. You can query multiple tages with the `,` separator. |
| Channels     | Information about how the ticket was created. Some possible values are "*web*", "*mobile*", "*API*" etc. |

Click here a full list of [ticket inputs](/connectors/zendesk/ticket-fields.md#ticket-input-fields).

### Output fields
The output of this action contains a list of tickets with their respective outputs. Here are some of the commonly used outputs.

| Output field | Description                                       |
|--------------|---------------------------------------------------|
| Ticket ID    | The unique Zendesk ID of the ticket. This is automatically assigned when the ticket is created. |
| Subject      | The subject of the ticket.                        |
| Type         | The type of the ticket. Permitted values are `problem`, `incident`, `question`, or `task`. |
| Priority     | The priority of the ticket. Permitted values are `urgent`, `high`, `normal`, or `low`. |
| Ticket custom fields | Includes data of ticket custom fields(s). |
| List size    | The size of the list, corresponding to the number of tickets retrieved. |

Click here for a full list of [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields).
