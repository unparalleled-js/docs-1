---
title: Workato connectors - Zendesk get custom object record by id action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Get custom object record by id action

Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization).  Find out more [here](/connectors/zendesk/custom-objects.md).

This action  retrieves details about a specific custom object record that matches a search by Zendesk ID. Only records in your Zendesk instance that matches the criteria will be returned.

![Get custom object records by ID action](/assets/images/connectors/zendesk/get-custom-object-records-by-id.png)
*Get custom object records by ID action*

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
        The unique Zendesk ID for the custom object record.
      </td>
    </tr>
  </tbody>
</table>

### Output fields

The output of this action contains the full set of columns from the selected custom object type.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Type</td>
      <td>
        The name of the custom object type.
      </td>
    </tr>  
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk ID. This is automatically assigned when the custom object record is created.
    </tr>  
    <tr>
      <td>External ID</td>
      <td>
        A unique identifier from another system.
      </td>
    </tr>
    <tr>
      <td>Date created</td>
      <td>
        The time the custom object record was created.
      </td>
    </tr>
    <tr>
      <td>Date updated</td>
      <td>
        The time the custom object record was last updated.
      </td>
    </tr>
    <tr>
      <td>Attributes</td>
      <td>
        Includes data of custom object custom field(s).
      </td>
    </tr>
  </tbody>
</table>
