---
title: Workato connectors - Zendesk get user details by ID action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'user', 'details', 'get', 'find']
---

# Zendesk - Get user details by ID action
This action retrieves details about a specific user that matches a search by user ID. Only records in your Zendesk instance that matches the criteria will be returned.

![Get user details by ID action](/assets/images/connectors/zendesk/get-user-by-id.png)
*Get user details by ID action*

### Input fields
| Input field | Description                        |
|-------------|------------------------------------|
| User ID     | The unique Zendesk ID of the user. |

### Output fields
The output of this action contains the full set of columns from the selected user. Here are some of the commonly used outputs.

| Output field | Description                                  |
|--------------|----------------------------------------------|
| ID           | The unique Zendesk ID of the user. This is automatically assigned when the user is created. |
| Role         | The role of the user. Permitted values are `End-user`, `Agent`, or `Administrator`. |
| Email        | The primary email of the user.               |
| Organization ID | The unique Zendesk ID of the user's organization. If the user has more than one organization membership, it will display the user's default organization. |
| User custom fields | Includes data of user custom field(s). |

Click here for a full list of [user outputs](/connectors/zendesk/user-fields.md#user-output-fields).
