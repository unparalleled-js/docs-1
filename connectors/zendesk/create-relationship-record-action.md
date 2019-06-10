---
title: Workato connectors - Zendesk create relationship record action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Create relationship record action

Zendesk allows you to configure custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). You can also configure custom relationships to define how objects are related. Find out more about [here](/connectors/zendesk/custom-objects.md).

This action creates a single relationship record between two objects. For this action to execute successfully, the recipe has to find existing object records in your Zendesk instance.

![Create relationship record action](/assets/images/connectors/zendesk/create-relationship-record-action.png)
*Create relationship record action*

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
        Select the type of relationship for your new record.
      </td>
    </tr>
    <tr>
      <td><kbd>Source object</kbd> ID</td>
      <td>
        The unique Zendesk ID of the source object.
      </td>
    </tr>
    <tr>
      <td><kbd>Target object</kbd> ID</td>
      <td>
        The unique Zendesk ID of the target object.
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
      <td>Date created</td>
      <td>
        The time the relationship record was created.
      </td>
    </tr>
  </tbody>
</table>
