---
title: Workato connectors - Zendesk update custom object record action
date: 2019-06-06 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom object', 'update']
---

# Zendesk - Update custom object record action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization).  Find out more about [here](/connectors/zendesk/custom-objects.md).

This action updates a specific custom object record in your Zendesk instance. The record to edit is identified by its Zendesk ID.

![Update custom object record action](/assets/images/connectors/zendesk/update-custom-object-action.png)
*Update custom object record action*

### Input fields
| Input field   | Description                                        |
|---------------|----------------------------------------------------|
| Custom object | Select a custom object type for your search.       |
| ID            | The unique Zendesk ID of the custom object record. |
| Update record values |  Provide data for each column of the record to be created. The input fields are **required** and **optional** according to how you configured the custom object type. |

### Output fields
The output of this action contains the full set of columns from the selected custom object type.

| Output field | Description                                     |
|--------------|-------------------------------------------------|
| Type         | The name of the custom object type.             |
| ID           | The unique Zendesk ID of the custom object record. This is automatically assigned when the custom object record is created. |
| External ID  | A unique identifier from another system.        |
| Date created | The time the custom object record was created.  |
| Date updated | The time the custom object record was updated.  |
| Attributes   | Includes data of custom object custom field(s). |
