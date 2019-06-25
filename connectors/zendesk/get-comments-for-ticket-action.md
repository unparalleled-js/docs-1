---
title: Workato connectors - Zendesk comments for ticket action
date: 2019-05-30 18:00:00 Z
search:
    keywords: ['zendesk', 'ticket', 'comments','details', 'get', 'find']
---

# Zendesk - Get comments for ticket action
This action retrieves a specific ticket that matches a search by ticket ID. Only results in your Zendesk instance that matches the criteria will be returned

![Get comments for ticket action](/assets/images/connectors/zendesk/get-comments-ticket.png)
*Get comments for ticket action*

### Input fields
| Input field | Description                          |
|-------------|--------------------------------------|
| ID          | The unique Zendesk ID of the ticket. |

### Output fields
The output of this action contains the full list of comments for this ticket, including the **description** (which is saved as the first comment of a ticket).

| Output field | Description                                                 |
|--------------|-------------------------------------------------------------|
| Ticket ID    | The unique Zendesk ID of the ticket. This is automatically assigned when the ticket is created. |
| Type         | The type of the ticket comment. Permitted values are `comment`, `incident`, or `VoiceComment`. |
| Body         | The comment made by the author.                             |
| HTML body    | The comment made by the author formatted in HTML.           |
| Public       | Is `True` if this comment is public, otherwise it will display `False`. |
| Date created | The time this comment was created.                          |
| Author ID    | The unique Zendesk ID of the author of the comment.         |
| Attachments  | The attachment(s) on this comment.                          |
| List size    | The size of the list, corresponding to the number of comments retrieved. |
