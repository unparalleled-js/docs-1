---
title: Workato connectors - Zendesk new/updated ticket trigger
data: 2019-05-28 18:00:00 Z
search:
    keywords: ['zendesk', 'ticket', 'trigger', 'create', 'updated','new']
---

# Zendesk - New/updated ticket trigger (real time)
This trigger picks up tickets as soon they are created or updated. Each ticket is processed as a separate job. It makes use of business rules to detect and trigger a new or updated ticket event to be processed.

> This trigger automatically creates a Zendesk trigger that can be found in your Zendesk account under **Admin** > **Business rules** > **Triggers**.

![New/updated ticket trigger](/assets/images/connectors/zendesk/updated-ticket-trigger.png)
*New/updated ticket trigger*

### Input fields
| Input field | Description |
|-------------|-------------|
| From        | Tickets created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one day** before the recipe is first started. |

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
