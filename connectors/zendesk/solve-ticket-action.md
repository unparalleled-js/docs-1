---
title: Workato connectors - Zendesk solve ticket action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Solve ticket action

This action updates a specific ticket your Zendesk instance and sets the ticket's status to `solved`. The ticket is identified by its Zendesk ID.

Some ticket fields put constraints on a ticket's status. For example, Zendesk 
requires a non-`null` input for **assignee** and **group**, before setting a ticket to `solved`. Check that you have satisfied all default and custom preconditions before making this action.

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
      <td>Ticket form custom fields</td>
      <td>
        Select a ticket form to open required fields for that preconfigured ticket form.
      </td>
    </tr> 
    <tr>
      <td>Ticket custom fields</td>
      <td>
        Provide data for the required ticket custom field(s).
      </td>
    </tr>
  </tbody>
</table>

### Output fields

The output of this action contains the full set of columns from the selected ticket. Here are some of the commonly used outputs.

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
        The subject of the ticket.
      </td>
    </tr>
    <tr>
      <td>Type</td>
      <td>
        The type of the ticket. Permitted values are <code>problem</code>, <code>incident</code>, <code>question</code>, or <code>task</code>.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The priority of the ticket. Permitted values are <code>urgent</code>, <code>high</code>, <code>normal</code>, or <code>low</code>.
      </td>
    </tr>
    <tr>
      <td>Ticket custom fields</td>
      <td>
        Includes data of ticket custom fields.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [ticket output](/connectors/zendesk/ticket-fields.md#ticket-output-fields).
