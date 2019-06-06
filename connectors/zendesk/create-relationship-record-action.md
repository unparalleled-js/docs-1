---
title: Workato connectors - Zendesk create relationship record action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Create relationship record action

Zendesk allows you to create custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). Custom objects can be configured to suit your various use-cases. It could be "product", "orders", "devices" etc. You can also create relationships; between two custom objects or between a custom object and Zendesk object (e.g. Zendesk:user). Find out more about Zendesk relationships [here](/connectors/zendesk/sunshine-platform.md#something)

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
      <td><kbd>Object name</kbd> ID</td>
      <td>
        Unique Zendesk ID for the object record. This is automatically assigned when the custom object record is created.<br>
        <br>
        Workato will ask for two record IDs to link. The first object record ID will be the <code>Source</code>, and the second object record ID will be the <code>Target</code>.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

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
        The ID fo the object record that is the source of the relationship.
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
