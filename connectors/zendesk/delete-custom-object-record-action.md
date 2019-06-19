---
title: Workato connectors - Zendesk delete custom object record action
date: 2019-06-06 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom object', 'delete', 'update']
---

# Zendesk - Delete custom object record action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization).  Find out more [here](/connectors/zendesk/custom-objects.md).

This action selects a specific custom object record by its Zendesk  ID and deletes the record from your Zendesk instance. For this action to run successfully, the recipe has to find an existing custom object record in your Zendesk instance.

![Delete custom object action](/assets/images/connectors/zendesk/delete-custom-object-action.png)
*Delete custom object action*

### Input fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Input field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Custom object</td>
      <td>
        Select a custom object type for your search.
      </td>
    </tr>
    <tr>
      <td>ID</a></td>
      <td>
        Unique Zendesk ID for the custom object record. This is automatically assigned when the custom object record is created.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
There is no output for this action.
