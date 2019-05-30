---
title: Workato connectors - Zendesk search ticket action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Search ticket action

This action retrieves a list of all ticket in your Zendesk instance that matches your search criteria. Only results that matches all the criteria will be returned

![Search ticket action](/assets/images/connectors/zendesk/search-ticket-action.png)
*Search ticket action*

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
      <td>Status</a></td>
      <td>
        The status of the ticket. Allowed values are <code>new</code>, <code>open</code>, <code>pending</code>, <code>hold</code>, <code>solved</code>, or <code>closed</code>.
      </td>
    </tr>
    <tr>
      <td>Type</a></td>
      <td>
        The type of the ticket. Allowed values are <code>problem</code>, <code>incident</code>, <code>question</code>, or <code>task</code>.
      </td>
    </tr>
    <tr>
      <td>Priority</a></td>
      <td>
        The priority of the ticket. Allowed values are <code>urgent</code>, <code>high</code>, <code>normal</code>, or <code>low</code>.
      </td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>
        The ticket's subject.
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The ticket's description or comments.
      </td>
    </tr>
    <tr>
      <td>Earliest created time</td>
      <td>
      The earliest date, or date and time, the ticket was created. Comparisons will be inclusive.
      </td>
    </tr>
    <tr>
      <td>Latest created time</td>
      <td>
        The latest date, or date and time, the ticket was created. Comparisons will be inclusive.
      </td>
    </tr>
    <tr>
      <td>Earliest modified time</td>
      <td>
        The latest date, or date and time, the ticket was updated. Comparisons will be inclusive.  
      </td>
    </tr>
    <tr>
      <td>Latest modified time</td>
      <td>
        The latest date, or date and time, the ticket was updated. Comparisons will be inclusive.
      </td>
    <tr>
      <td>Requester</td>
      <td>
        THe ticket's requester. You can specify using the full username, user ID, email, or phone number. You can also use keywords 'none' and 'me'.
        </td>
    </tr>
    <tr>
      <td>Submitter</td>
      <td>
        THe ticket's submitter. You can specify using the full username, user ID, email, or phone number. You can also use keywords 'none' and 'me'.
      </td>
    </tr>
    <tr>
      <td>Assignee</td>
      <td>
        The ticket's assigned <code>agent</code> user. You can specify using the full username, user ID, email, or phone number. You can also use keywords 'none' and 'me'.  
      </td>
    </tr>
    <tr>
      <td>Organization name or ID</td>
      <td>
        The ticket requester's organization. You can specify using the organization name or organization ID. You can also use keywords 'none' and 'me'.
      </td>
    <tr>
      <td>Tags</td>
      <td>
        The ticket's tag. You can use Words and combination of words, separated by a <code>,</code>.  
      </td>
    </tr>
    <tr>
      <td>Channels</td>
      <td>
        The ticket's via:channel. You can use 'mail', 'closed_ticket', 'phone' or 'web'. For more information on the via object, please visit the <a href="https://support.zendesk.com/hc/en-us/articles/203663226">Zendesk API document</a> on the topic.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this action contains the full set of columns from the list of ticket. Custom outputs are generated for custom ticket forms.

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
