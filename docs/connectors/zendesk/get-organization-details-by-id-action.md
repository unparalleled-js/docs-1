---
title: Workato connectors - Zendesk get organization details by ID action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'organization', 'details', 'get', 'find']
---

# Zendesk - Get organization details by ID action
This action retrieves details about a specific organization that matches a search by organization ID. Only records in your Zendesk instance that matches the criteria will be returned.

![Get organization details by ID](~@img/connectors/zendesk/get-organization-details-by-id.png)
*Get organization details by ID*

### Input fields
| Input field      | Description                                |
|------------------|--------------------------------------------|
| Organization ID  | The unique Zendesk ID of the organization. |
</table>

### Output fields
The output of this action contains the full set of columns from the selected organization. Here are some of the commonly used outputs.

| Output field | Description                                                  |
|--------------|--------------------------------------------------------------|
| ID           | The unique Zendesk ID of the organization. This is automatically assigned when the organization is created. |
| Group ID     | The unique Zendesk ID of the group of this organization.     |
| Organization custom fields | Includes data of organization custom field(s). |

Click here for a full list of [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).
