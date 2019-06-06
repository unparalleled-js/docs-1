---
title: Workato connectors - Zendesk delete relationship record by id action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Delete relationship record by ID action

Zendesk allows you to create custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). Custom objects can be configured to suit your various use-cases. It could be "product", "orders", "devices" etc. You can also create relationships; between two custom objects or between a custom object and Zendesk object (e.g. Zendesk:user). Find out more about Zendesk relationships [here](/connectors/zendesk/sunshine-platform.md#something)

This action selects a specific relationship record by its Zendesk ticket ID and deletes the record from your Zendesk instance. For this action to run successfully, the recipe has to find an existing relationship record in your Zendesk instance. After the each job has been successfully completed, you cannot rerun the job again.

![Delete relationship record by ID action](/assets/images/connectors/zendesk/delete-relationship-record-by-id-action.png)
*Delete relationship record by ID action*

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
      <td>ID</td>
      <td>
        Unique Zendesk ID of the relationship record. This is automatically assigned when the relationship record is created..
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

There is no output data for this action.
