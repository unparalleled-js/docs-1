---
title: Workato connectors - Zendesk update ticket action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Update ticket action

This action updates a specific ticket in your Zendesk instance identified by its Zendesk ID. You can update ticket fields and add new comments.

![Update ticket action](/assets/images/connectors/zendesk/update-ticket-action.png)
*Update ticket action*

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
      <td>Ticket ID</a></td>
      <td>
        The unique Zendesk ticket ID.
      </td>
    </tr>
     <tr>
      <td>Ticket form custom fields</td>
      <td>
        Select a ticket form to open preconfigured custom fields.
      </td>
    </tr>
    <tr>
      <td>Comment</a></td>
      <td>
        Create a new comment to the ticket.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The priority of the ticket. Allowed values are <code>urgent</code>, <code>high</code>, <code>normal</code>, or <code>low</code>.
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
        The status of the ticket. Allowed values are <code>open</code>, <code>pending</code>, <code>hold</code>, <code>solved</code>, or <code>closed</code>.<br>
        <br>
        Some ticket fields put constraints on a ticket's status. Check that you have satisfied all preconditions before making a <code>solved</code> action.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The tags applied to this ticket. You can add multiple tags with the <code>,</code> separator.
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

Click here for a full list of [ticket inputs](/connectors/zendesk/ticket-fields.md#ticket-input-fields).

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
        Includes data of ticket custom field(s).
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields).

## Bulk update tickets action

This action updates multiple tickets in your Zendesk instance. The tickets are identified by their Zendesk ticket ID. You can update ticket fields and add new comments.

![Bulk update tickets action](/assets/images/connectors/zendesk/bulk-update-tickets-action.png)
*Bulk update tickets action*

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
      <td>Ticket ID</a></td>
      <td>
        The unique Zendesk ticket ID. You can combine multiple tickets with the <code>,</code> separator.
      </td>
    </tr>
     <tr>
      <td>Ticket form custom fields</td>
      <td>
        Select a ticket form to open preconfigured custom fields.
      </td>
    </tr>
    <tr>
      <td>Comment</a></td>
      <td>
        Create a new comment to the ticket.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The priority of the ticket. Allowed values are <code>urgent</code>, <code>high</code>, <code>normal</code>, or <code>low</code>.
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
        The status of the ticket. Allowed values are <code>open</code>, <code>pending</code>, <code>hold</code>, <code>solved</code>, or <code>closed</code>.<br>
        <br>
        Some ticket fields put constraints on the a ticket's status. Check that you have satisfied all preconditions before making a <code>solved</code> action.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The tags applied to this ticket. You can add multiple tags with the <code>,</code> separator.
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

Click here a full list of [ticket inputs](/connectors/zendesk/ticket-fields.md#ticket-input-fields).

### Output fields

The output of this action is a status record of the bulk update action. You can use this status record as inputs in your recipe.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk queue ID. This is automatically assigned when the <i>bulk update</i> action is requested.
      </td>
    </tr>
    <tr>
      <td>URL</td>
      <td>
        The URL of the status update.
      </td>
    </tr>
    <tr>
      <td>Total</td>
      <td>
        The total number of tasks this action is processing.
      </td>
    </tr>
    <tr>
      <td>Progress</td>
      <td>
        The number of tasks that have already been completed.
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
        The current status of the <i>bulk update</i> action. Permitted values are <code>queued</code>, <code>working</code>, <code>failed</code>, <code>completed</code>, or <code>killed</code>.
      </td>
    </tr>
    <tr>
      <td>Message</td>
      <td>
        The message from the job worker, if any.
      </td>
    </tr>
  </tbody>
</table>
