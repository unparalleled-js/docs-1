---
title: Workato connectors - Zendesk get organization by external ID action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'ticket', 'get', 'find', 'list', 'external id']
---

# Zendesk - Get organizations by external ID action
This action retrieves a list of organizations that matches a search by external ID. Only records in your Zendesk instance that matches the criteria will be returned.

![Get organization by external ID action](/assets/images/connectors/zendesk/get-organization-external-id.png)
*Get organization by external ID action*

### Input fields

| Input field  | Description                                    |
|--------------|------------------------------------------------|
| External ID  | The external ID of the organization(s). You can query multiple external IDs with the `,` separator. |

### Output fields
The output of this action contains the full set of columns from the selected organization(s). Here are some of the commonly used outputs.

| Output field | Description                                                  |
|--------------|--------------------------------------------------------------|
| ID           | The unique Zendesk ID of the organization. This is automatically assigned when the organization is created. |
| Group ID     | The unique Zendesk ID of the group of this organization.     |
| Organization custom fields | Includes data of organization custom field(s). |
| List size    | The size of the list, corresponding to the number of organizations retrieved. |

Click here for a full list of [organization output](/connectors/zendesk/organization-fields.md#organization-output-fields).
