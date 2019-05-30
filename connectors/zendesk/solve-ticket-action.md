---
title: Workato connectors - Zendesk solve ticket action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Solve ticket action

This action updates a specific ticket your Zendesk instance and sets the ticket's status to `solved`. The ticket is identified by its Zendesk ID.

Some ticket standard and custom field put constraints on the a ticket's status. For example, Zendesk requires that you allocate an **assignee** and **group** to the ticket before setting a ticket to <code>solved</code>. Check that you have satisfied all preconditions before making this action.

![Solve ticket action](/assets/images/connectors/zendesk/solve-ticket-action.png)
*solve ticket action*

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
      <td>Ticket ID</a></td>
      <td>
        The unique Zendesk ticket ID.
      </td>
    </tr>
    <tr>
      <td>Ticket form</td>
      <td>
        For Enterprise accounts only.<br>
        <br>
        Selecting a ticket form will retrieve the corresponding form's custom fields. You can leave this field blank to use the default ticket form
      </td>
    </tr>
    <tr>
      <td>Ticket form custom fields</td>
      <td>
        Selecting certain ticket forms will open different custom fields by default. For example, if your organization creates a custom "Product Inquiry" ticket form, it may have a mandatory custom field <code>Product ID</code>. <br>
        <br>
        Custom fields can be any ticket field type. For more information on Zendesk's ticket field types, <a href="/connectors/zendesk/ticket-output.md#ticket-input">click here</a>.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this action contains the full set of columns from the ticket. Custom outputs are generated for custom ticket forms.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ticket ID</td>
      <td>
        Unique Zendesk ticket ID. This is automatically assigned when the ticket is created.
      </td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>
        The subject of the ticket. It will return <code>solved</code> if the recipe job ran succesfully.
      </td>
    </tr>
    <tr>
      <td>Type</td>
      <td>
        The type of the ticket. Allowed values are <code>problem</code>, <code>incident</code>, <code>question</code>, or <code>task</code>.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The priority of the ticket. Allowed values are <code>urgent</code>, <code>high</code>, <code>normal</code>, or <code>low</code>.
      </td>
    </tr>
    <tr>
      <td>Ticket custom fields</td>
      <td>
        Includes data of custom ticket fields created.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [ticket output](/connectors/zendesk/ticket-output.md#ticket-output).
