---
title: Workato connectors - Zendesk create organization membership action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'organization', 'membership', 'create']
---

# Zendesk - Create organization membership action
A membership links a user to an organization - An organization can have many users, and a users can be in many organizations.

This action connects an existing user to an existing organization. Both the user and the organization are identified by their Zendesk ID.

![Create organization membership action](/assets/images/connectors/zendesk/create-organization-membership.png)
*Create organization membership action*

### Input fields
| Input field     | Description                                         |
|-----------------|-----------------------------------------------------|
| User ID         | The Zendesk ID of the user to be connected.         |
| Organization ID | The Zendesk ID of the organization to be connected. |

### Output fields
| Output field    | Description                                             |
|-----------------|---------------------------------------------------------|
| User ID         | The unique Zendesk ID of the user of this membership.   |
| Organization ID | The unique Zendesk ID of the organization of this membership. |
| ID              | The unique Zendesk ID of the organization membership. This is automatically assigned when the membership is created. |
| URL             | The API URL of this membership.                         |
| Default         | Is `True` if this is the default organization membership of the user, otherwise it will display `False`. |
| Created at      | The time the organization membership was created.       |
| Updated at      | The time the organization membership was updated.       |
