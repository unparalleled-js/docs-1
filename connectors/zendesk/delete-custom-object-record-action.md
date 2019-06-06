---
title: Workato connectors - Zendesk delete custom object record action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Delete custom object record action

Zendesk allows you to create custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). Custom objects can be configured to suit your various use-cases. It could be "product", "orders", "devices" etc. Find out more about Zendesk custom objects [here](/connectors/zendesk/sunshine-platform.md).

This action deletes a specific custom object record in your Zendesk instance. The record to delete is identified by its Zendesk ID. After the each job has been successfully completed, you cannot rerun the job again.

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

#### Output fields

There is no output data for this action.
