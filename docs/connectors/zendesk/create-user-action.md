---
title: Workato connectors - Zendesk create user action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'user', 'create']
---

# Zendesk - Create user action
This action creates a single user in your Zendesk instance.

![Create user action](~@img/connectors/zendesk/create-user-action.png)
*Create user action*

### Input fields
Here are some of the commonly used inputs.

| Input field | Description                                   |
|-------------|-----------------------------------------------|
| Name        | The name of the user.                         |
| Role        | The role of the user. Permitted values are `End-user`, `Agent`, or `Administrator`. |
| Email       | Mandatory if the user's role is designated as `Agent`. The primary email of the user. |
| User custom fields | Provide data for user custom field(s). |

Click here for a full list of [user inputs](/connectors/zendesk/user-fields.md#user-input-fields).

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
