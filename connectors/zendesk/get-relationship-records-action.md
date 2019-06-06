---
title: Workato connectors - Zendesk get relationship record action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Get relationship record action

Zendesk allows you to create custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). Custom objects can be configured to suit your various use-cases. It could be "product", "orders", "devices" etc. You can also create relationships; between two custom objects or between a custom object and Zendesk object (e.g. Zendesk:user). Find out more about Zendesk relationships [here](/connectors/zendesk/sunshine-platform.md#something)

This action will retrieve the relationship record(s) of a specified relationship type for a specified object record. It will retrieve the relationship record whose `Source` matches the object record specified in your search. Only results that matches the criteria will be returned.

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
      <td><kbd>Object name</kbd> ID</a></td>
      <td>
        Unique Zendesk ID of the <code>Source</code> of the relationship.
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
      <td>Reference</td>
      <td>
        The API URL of the target object record.
      </td>
    </tr>
    <tr>
      <td>List size</td>
      <td>
        The number of relationship records retrieved.
      </td>
    </tr>
  </tbody>
</table>
