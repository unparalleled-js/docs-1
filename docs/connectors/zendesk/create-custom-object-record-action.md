---
title: Workato connectors - Zendesk create custom object record action
date: 2019-06-04 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom object', 'create']
---

# Zendesk - Create custom object record action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization).  Find out more [here](/connectors/zendesk/custom-objects.md).

This action creates a single record of a custom object in your Zendesk instance.

![Create custom object record action](~@img/connectors/zendesk/create-custom-object-record-action.png)
*Create custom object record action*

### Input fields
| Input field       | Description                                      |
|-------------------|--------------------------------------------------|
| Custom object     | Select a custom object type for your new record. |
| New record values | Provide data for each column of the record to be created. The input fields are **required** or **optional** according to how you configured the custom object type. |

### Output fields
The output of this trigger contains the full set of columns from the selected custom object type.

| Output field | Description                                     |
|--------------|-------------------------------------------------|
| Type         | The name of the custom object type.             |
| ID           | The unique Zendesk ID of the custom object record. This is automatically assigned when the custom object record is created. |
| External ID  | A unique identifier from another system.        |
| Date created | The time the custom object record was created.  |
| Date updated | The time the custom object record was updated.  |
| Attributes   | Includes data of custom object custom field(s). |
