---
title: Workato connectors - Zendesk update ticket action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Update ticket action

This action updates a specific ticket your Zendesk instance. The ticket to edit is identified by its Zendesk ID. You can update ticket standard or custom field, or add new comments to a ticket.

![Update ticket action](/assets/images/connectors/zendesk/update-ticket-action.png)
*Update ticket action*

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
        The unique Zendesk ticket ID. This is used to identify the ticket to update.
      </td>
    </tr>
    <tr>
      <td>Comment</a></td>
      <td>
        Create a new comment to the ticket.<br>
        <br>
        The new comment is authored by the the Workato user, by default. This is the Zendesk credential configured during the <a href="connectors/zendesk.md#how-to-connect-to-zendesk-on-workato">connection setup</a>. To customise the comment author's ID, select <b>New/remove optional fields</b> > <b>Comment author ID</b>.
      </td>
    </tr>
    <tr>
      <td>Comment public</a></td>
      <td>
        Set the comment as <code>yes</code>: a public comment, or <code>no</code>:not a public comment.
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
        Some ticket standard and custom field put constraints on the a ticket's status. For example, Zendesk requires that you allocate an <b>assignee</b> and <b>group</b> to the ticket before setting a ticket to <code>solved</code>. Check that you have satisfied all preconditions before making a <code>solved</code> action.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        Words and combination of words that add more context to the tickets.  
      </td>
    </tr>
    <tr>
      <td>Ticket form custom fields</td>
      <td>
        Selecting certain ticket forms will open different custom fields by default. For example, if your organization creates a custom "Product Inquiry" form, it may have a mandatory custom field <code>Product ID</code>. <br>
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

## Bulk update tickets actions

This action updates multiple tickets in your Zendesk instance. Tickets are identified their Zendesk ticket ID. You can update ticket standard or custom field, or add new comments to a ticket.

![Bulk update ticket action](/assets/images/connectors/zendesk/bulk-update-tickets-action.png)
*Bulk update ticket action*

#### Input fields

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
        The unique Zendesk ticket ID. This is used to identify the ticket to update. You can combine multiple IDs into a single query with a <code>,</code> separator.
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

The output of this action contains information about the tickets that have been updated. Custom outputs are generated for custom ticket forms.

\\\\\\
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
      <td>URL</td>
      <td>
        .
      </td>
    </tr>
    <tr>
      <td>Total</td>
      <td>
        .
      </td>
    </tr>
    <tr>
      <td>Progress</td>
      <td>
      .
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
      .
      </td>
    </tr>
    <tr>
      <td>Message</td>
      <td>
        .
      </td>
    </tr>
  </tbody>
</table>
