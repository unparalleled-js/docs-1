---
title: Workato connectors - Zendesk create ticket action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Create ticket action

This action creates a single ticket into your Zendesk instance.

![Create ticket action](/assets/images/connectors/zendesk/create-ticket-action.png)
*Create ticket action*

### Input fields

Here are some of the commonly used inputs.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ticket form</a></td>
      <td>
        Select a ticket form to open preconfigured custom fields.
      </td>
    </tr>
    <tr>
      <td>Comment</a></td>
      <td>
        A description of the ticket.
      </td>
    </tr>
    <tr>
      <td>Subject</a></td>
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
      <td>Status</td>
      <td>
        The status of the ticket. Permitted values are <code>open</code>, <code>pending</code>, <code>hold</code>, <code>solved</code>, or <code>closed</code>.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        Words and combination of words that add more context to the tickets.  
      </td>
    </tr>
    <tr>
      <td>Ticket custom fields</td>
      <td>
        Provide data for the ticket custom field(s).
      </td>
    </tr>
  </tbody>
</table>

Click here for more information about [ticket input](/connectors/zendesk/ticket-fields.md#ticket-input-fields).

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
