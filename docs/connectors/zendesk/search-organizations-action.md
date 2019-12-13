---
title: Workato connectors - Zendesk search organizations action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'organization', 'search', 'find']
---

# Zendesk - Search organizations action
This action retrieves a list of organizations that matches your search criteria. Only records in your Zendesk instance that matches all the criteria will be returned.

![Search organizations action](~@img/connectors/zendesk/search-organization-action.png)
*Search organizations action*

### Input fields
| Input field | Description                                                   |
|-------------|---------------------------------------------------------------|
| Name        | The name of the organization.                                 |
| Tags        | The tags applied to this organization. You can add multiple tags with the `,` separator. |
| Details     | Details about the organization.                               |
| Notes       | Notes about the organization.                                 |
| Organization custom fields | Provide data for organization custom field(s). |

### Output fields
The output of this action contains a list of organizations with their respective outputs. Here are some of the commonly used outputs.

| Output field | Description                                                  |
|--------------|--------------------------------------------------------------|
| ID           | Unique Zendesk organization ID. This is automatically assigned when the organization is created. |
| Group ID     | The unique Zendesk ID of the group of this organization.     |
| Organization custom fields | Includes data of organization custom field(s). |
| List size    | The size of the list, corresponding to the number of organizations retrieved. |

Click here for a full list of [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).
