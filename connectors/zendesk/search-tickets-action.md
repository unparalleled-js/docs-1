---
title: Workato connectors - Zendesk search tickets action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Search tickets action

This action retrieves a list of all tickets that matches your search criteria. Only records in your Zendesk instance that matches all the criteria will be returned.

![Search tickets action](/assets/images/connectors/zendesk/search-ticket-action.png)
*Search tickets action*

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
      <td>Status</td>
      <td>
        The status of the ticket. Permitted values are <code>open</code>, <code>pending</code>, <code>hold</code>, <code>solved</code>, or <code>closed</code>.
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
      <td>Subject</td>
      <td>
        The subject of the ticket.
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The description of the ticket.
      </td>
    </tr>
    <tr>
      <td>Earliest created time</td>
      <td>
        The earliest time the ticket was created. Comparisons will be inclusive.
      </td>
    </tr>
    <tr>
      <td>Latest created time</td>
      <td>
        The latest time the ticket was created. Comparisons will be inclusive.
      </td>
    </tr>
    <tr>
      <td>Earliest modified time</td>
      <td>
        The earliest time the ticket was updated. Comparisons will be inclusive.  
      </td>
    </tr>
    <tr>
      <td>Latest modified time</td>
      <td>
        The latest time the ticket was updated. Comparisons will be inclusive.
      </td>
    <tr>
      <td>Requester</td>
      <td>
        The requester of the ticket. You can specify using the full username, user ID, email, or phone number. You can also use keywords 'none' and 'me'.
        </td>
    </tr>
    <tr>
      <td>Submitter</td>
      <td>
        The submitter of the ticket. You can specify using the full username, user ID, email, or phone number. You can also use keywords 'none' and 'me'.
      </td>
    </tr>
    <tr>
      <td>Assignee</td>
      <td>
        The assigned <code>Agent</code> of the ticket. You can specify using the full username, user ID, email, or phone number. You can also use keywords 'none' and 'me'.  
      </td>
    </tr>
    <tr>
      <td>Organization name or ID</td>
      <td>
        The name or ID of the requester's organization. You can specify using the organization name or organization ID. You can also use keywords 'none' and 'me'.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The tags applied to this ticket. You can query multiple tags with the <code>,</code> separator.
      </td>
    </tr>
    <tr>
      <td>Channels</td>
      <td>
        Information about how the ticket was created. Possible values are <i>"web", "mobile" or "API"</i>.
      </td>
    </tr>
  </tbody>
</table>

### Output fields

The output of this action contains the full set of columns from the list of tickets. Here are some of the commonly used outputs.

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
    <tr>
      <td>List size</td>
      <td>
        This is the size of the list, corresponding to the number of tickets retrieved.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields).
