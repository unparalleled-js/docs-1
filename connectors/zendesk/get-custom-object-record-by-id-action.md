---
title: Workato connectors - Zendesk get custom object record by id action
date: 2019-06-06 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom object', 'details', 'get', 'find']
---

# Zendesk - Get custom object record by id action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization).  Find out more [here](/connectors/zendesk/custom-objects.md).

This action retrieves details about a specific custom object record that matches a search by Zendesk ID. Only records in your Zendesk instance that matches the criteria will be returned.

![Get custom object records by ID action](/assets/images/connectors/zendesk/get-custom-object-records-by-id.png)
*Get custom object records by ID action*

### Input fields
| Input field   | Description                                         |
|---------------|-----------------------------------------------------|
| Custom object | Select a custom object type for your search.        |
| ID            | The unique Zendesk ID of the custom object record. |

### Output fields
The output of this action contains the full set of columns from the selected custom object type.

| Output field | Description                                     |
|--------------|-------------------------------------------------|
| Type         | The name of the custom object type.             |
| ID           | he unique Zendesk ID for the custom object record. This is automatically assigned when the record is created. |
| External ID  | A unique identifier from another system.        |
| Date created | The time the custom object record was created.  |
| Date updated | The time the custom object record was updated.  |
| Attributes   | Includes data of custom object custom field(s). |
