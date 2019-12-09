---
title: Workato connectors - Zendesk new user trigger
date: 2019-05-28 18:00:00 Z
search:
    keywords: ['zendesk', 'user', 'trigger', 'create', 'new']
---

# Zendesk - New user triggers
This trigger picks up new users that are created. Each user is processed as a separate job. It checks for new jobs once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New user trigger](~@img/connectors/zendesk/new-user-trigger.png)
*New user trigger*

### Input fields
| Input field | Description |
|-------------|-------------|
| From        | Users created after this time will be processed by the recipe. If left blank, the default date will be set to **one day** before the recipe is first started. |

### Output fields
The output of this action contains the full set of columns from the selected user. Here are some of the commonly used outputs.

| Output field | Description                                  |
|--------------|----------------------------------------------|
| ID           | The unique Zendesk ID of the user. This is automatically assigned when the user is created. |
| Role         | The role of the user. Permitted values are `End-user`, `Agent`, or `Administrator`. |
| Email        | The primary email of the user.               |
| Organization ID | The ID of the user's organization. If the user has more than one organization membership, it will display the user's default organization. |
| User custom fields | Includes data of user custom field(s). |

Click here for a full list of [user outputs](/connectors/zendesk/user-fields.md#user-output-fields).
