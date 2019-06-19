---
title: Workato connectors - Zendesk get relationship record action
date: 2019-06-06 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom objects', 'relationship', 'details', 'get', 'find']
---

# Zendesk - Get relationship record action
Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). You can also configure custom relationships to define how objects are associated. Find out more about [here](/connectors/zendesk/custom-objects.md).

This action will retrieve the relationship records of a specified relationship type for a specified `source` object record. Only records that matches the criteria will be returned.

![Get relationship record action](/assets/images/connectors/zendesk/get-relationship-record-action.png)
*Get relationship record action*

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
      <td>Relationship type</td>
      <td>
        Select a relationship type for your search.
      </td>
    </tr>
    <tr>
      <td><kbd>Source object</kbd> ID</a></td>
      <td>
        The unique Zendesk ID of the source object.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Relationship type</td>
      <td>
        The user-defined key of the relationship type.
      </td>
    </tr>  
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk ID. This is automatically assigned when the relationship record is created.
    </tr>  
    <tr>
      <td>Source</td>
      <td>
        The ID of the object record that is the source of the relationship.
      </td>
    </tr>
    <tr>
      <td>Target</td>
      <td>
        The ID of the object record that is the target of the relationship
      </td>
    </tr>
    <tr>
      <td>Reference</td>
      <td>
        The API URL of the target object record.
      </td>
    </tr>
    <tr>
      <td>List size</td>
      <td>
        This is the size of the list, corresponding to the number of relationship records retrieved.
      </td>
    </tr>
  </tbody>
</table>
