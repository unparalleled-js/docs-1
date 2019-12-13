---
title: Workato connectors - Zendesk create relationship record action
date: 2019-06-06 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom objects', 'relationship', 'create']
---

# Zendesk - Create relationship record action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). You can also configure custom relationships to define how objects are related. Find out more about [here](/connectors/zendesk/custom-objects.md).

This action creates a single relationship record between two objects. The specified object records must exist in your Zendesk instance for this action to execute successfully.

![Create relationship record action](~@img/connectors/zendesk/create-relationship-record-action.png)
*Create relationship record action*

### Input fields
| Input field          | Description                                          |
|----------------------|------------------------------------------------------|
| Relationship type    | Select the type of relationship for your new record. |
| `[Source object]` ID | The unique Zendesk ID of the source object.          |
| `[Target object]` ID | The unique Zendesk ID of the target object.          |

### Output fields

| Output field      | Description                                    |
|-------------------|------------------------------------------------|
| Relationship Type | The user-defined key of the relationship type. |
| ID                | Unique Zendesk ID. This is automatically assigned when the relationship record is created. |
| Source            | The ID of the source of the relationship.      |
| Target            | The ID of the target of the relationship.      |
| Date created      | The time the relationship record was created.  |
