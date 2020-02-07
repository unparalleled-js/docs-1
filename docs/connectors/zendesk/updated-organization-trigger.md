---
title: Workato connectors - Zendesk new/updated organization trigger
date: 2019-05-29 18:00:00 Z
search:
    keywords: ['zendesk','update', 'trigger']
---

# Zendesk - New/updated organization trigger
This trigger picks up organizations that are created or updated. Each organization is processed as a separate job. It checks for new jobs once every poll interval.

![New/updated organization trigger](~@img/connectors/zendesk/updated-organization-trigger.png)
*New/updated organization trigger*

### Input fields
| Input field | Description |
|-------------|-------------|
| From        | Organizations created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one day** before the recipe is first started. |

### Output fields
The output of this trigger contains the full set of columns from the selected organization. Here are some of the commonly used outputs.

| Output field | Description                                                  |
|--------------|--------------------------------------------------------------|
| ID           | The unique Zendesk ID of the organization. This is automatically assigned when the organization is created. |
| Group ID     | The unique Zendesk ID of the group of this organization.     |
| Organization custom fields | Includes data of organization custom field(s). |

Click here for a full list of [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).
