---
title: Workato connectors - Zendesk update organization action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'organization', 'update']
---

# Zendesk - Update organization action
This action updates a specific organization your Zendesk instance. The organization is identified by its Zendesk ID. You can update standard and custom fields, and add new notes.

![Update organization action](/assets/images/connectors/zendesk/update-organization-action.png)
*Update organization action*

### Input fields
Here are some of the commonly used inputs.

| Input field     | Description                                               |
|-----------------|-----------------------------------------------------------|
| Organization ID | The unique Zendesk ID of the organization.                |
| Name            | The name of the organization.                             |
| External ID     | A unique identifier from another system.                  |
| Organization custom fields | Provide data for organization custom field(s). |

Click here for a full list of [organization inputs](/connectors/zendesk/organization-fields.md#organization-input-fields).

### Output fields
The output of this action contains the full set of columns from the selected organization. Here are some of the commonly used outputs.

| Output field | Description                                                  |
|--------------|--------------------------------------------------------------|
| ID           | The unique Zendesk ID of the organization. This is automatically assigned when the organization is created. |
| Group ID     | The unique Zendesk ID of the group of this organization.     |
| Organization custom fields | Includes data of organization custom field(s). |

Click here for a full list of [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).
