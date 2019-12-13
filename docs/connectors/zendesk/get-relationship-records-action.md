---
title: Workato connectors - Zendesk get relationship record action
date: 2019-06-06 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom objects', 'relationship', 'details', 'get', 'find']
---

# Zendesk - Get relationship record action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). You can also configure custom relationships to define how objects are associated. Find out more about [here](/connectors/zendesk/custom-objects.md).

This action will retrieve the relationship records of a specified relationship type for a specified `source` object record. Only records that match the criteria will be returned.

![Get relationship record action](~@img/connectors/zendesk/get-relationship-record-action.png)
*Get relationship record action*

### Input fields
| Input field          | Description                                      |
|----------------------|--------------------------------------------------|
| Relationship type    | Select the type of relationship for your search. |
| `[Source object]` ID | The unique Zendesk ID of the source object.      |

### Output fields
| Output field      | Description                                    |
|-------------------|------------------------------------------------|
| Relationship Type | The user-defined key of the relationship type. |
| ID                | The unique Zendesk ID of this relationship record. This is automatically assigned when the record is created. |
| Source            | The ID of the source of the relationship.      |
| Target            | The ID of the target of the relationship.      |
| Date created      | The time the relationship record was created.  |
| List size         | The size of the list, corresponding to the number of relationships retrieved. |
