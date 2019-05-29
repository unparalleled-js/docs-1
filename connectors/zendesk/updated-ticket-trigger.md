---
title: Zendesk - New/updated ticket trigger
data: 2019-05-28 18:00:00 Z
---

# Zendesk - New/updated ticket trigger (real time)

This trigger picks up tickets as soon they are created or updated. Each ticket is processed as a separate job. It makes use of business rules to detect and trigger a new or updated ticket event to be processed.

Fetches tickets as soon as they're created or updated. This trigger automatically creates a Zendesk trigger that can be found in your Zendesk account under **Admin** > **Business rules** > **Triggers**.

![New/updated ticket trigger](/assets/images/connectors/zendesk/updated-ticket-trigger.png)
*New/updated ticket trigger*

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
      <td>From</a></td>
      <td>
        Tickets created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    </tbody>
</table>

#### Output fields

The output of this trigger contains the full set of columns from the selected ticket. All default and custom columns are supported. Here are some of the commonly used trigger outputs.

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
  </tbody>
</table>

Click here for a full list of [ticket trigger output](/connectors/zendesk/trigger/ticket-output.md).
