---
title: Workato connectors - Zendesk get list of tickets by external ID action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Get list of tickets by external ID action

This action retrieves a list of all ticket in your Zendesk instance that matches a search by external ID. Only results that matches all the criteria will be returned

![Get list of tickets by external ID action](/assets/images/connectors/zendesk/get-ticket-external-id.png)
*Get list of tickets by external ID action*

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
      <td>External ID</a></td>
      <td>
        The ticket's external ID. You can combine multiple external IDs into a single query with a <code>,</code> separator.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this action contains the full set of columns from the list of tickets. Custom outputs are generated for custom ticket forms.

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
