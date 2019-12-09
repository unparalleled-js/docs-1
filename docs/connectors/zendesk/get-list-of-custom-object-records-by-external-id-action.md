---
title: Workato connectors - Zendesk get list of custom object records by external id action
date: 2019-06-06 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom object', 'get', 'find', 'list', 'external id']
---

# Zendesk - Get list of custom object records by external id action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization).  Find out more [here](/connectors/zendesk/custom-objects.md).

This action retrieves a list of custom object records that matches a search by external ID. Only results in your Zendesk instance that matches the criteria will be returned.

![Get list of organization by external ID action](~@img/connectors/zendesk/get-custom-object-records-by-external-id.png)
*Get list of custom object records by external ID action*

### Input fields
| Input field   | Description                                  |
|---------------|----------------------------------------------|
| Custom object | Select a custom object type for your search. |
| External ID   | The external ID of the custom object(s). You can query multiple external IDs with a `,` separator. |

### Output fields
The output of this action contains the full set of columns from the selected custom object type.

| Output field | Description                                     |
|--------------|-------------------------------------------------|
| Type         | The name of the custom object type.             |
| ID           | The unique Zendesk ID for the custom object record. This is automatically assigned when the record is created. |
| External ID  | A unique identifier from another system.        |
| Date created | The time the custom object record was created.  |
| Date updated | The time the custom object record was updated.  |
| Attributes   | Includes data of custom object custom field(s). |
| List size    | The size of the list, corresponding to the number of custom objects retrieved. |
