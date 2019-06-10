---
title: Workato connectors - Zendesk get list of custom object records by external id action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Get list of custom object records by external id action

Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization).  Find out more [here](/connectors/zendesk/custom-objects.md).

This action retrieves a list of custom object records that matches a search by external ID. Only results in your Zendesk instance that matches the criteria will be returned.

![Get list of organization by external ID action](/assets/images/connectors/zendesk/get-custom-object-records-by-external-id.png)
*Get list of custom object records by external ID action*

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
      <td>External ID</a></td>
      <td>
        The external ID of the organization(s). You can query multiple external IDs with a <code>,</code> separator.
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
