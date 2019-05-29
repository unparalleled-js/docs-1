---
title: Zendesk - Ticket trigger output
date: 2019-05-29 18:00:00 Z
---
https://developer.zendesk.com/rest_api/docs/support/tickets
# Zendesk - Ticket trigger output

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
      <td>External ID</td>
      <td>
        An ID to link tickets to local records.
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
        The status of the ticket. Allowed values are <code>open</code>, <code>pending</code>, <code>hold</code>, <code>solved</code>, or <code>closed</code>.
      </td>
    </tr>
    <tr>
      <td>Requester ID</td>
      <td>
        The ID of the user asking for support through the ticket.
      </td>
    </tr>
    <tr>
      <td>Submitter ID</td>
      <td>
        The ID fo the user who submitted the ticket. The submitter always becomes the author of the first comment on the ticket.
      </td>
    </tr>
    <tr>
      <td>Assignee ID</td>
      <td>
        The ID of the agent to assigned to the ticket.
      </td>
    </tr>
    <tr>
      <td>Organisation ID</td>
      <td>
        The ID of requester's organization.
      </td>
    </tr>
    <tr>
      <td>Group ID</td>
      <td>
        The ID of the group assigned tp the ticket.
      </td>
    </tr>
    <tr>
      <td>Forum topic ID</td>
      <td>
        The topic this ticket originated from.
      </td>
    </tr>
    <tr>
      <td>Recipient email address</td>
      <td>
      The original recipient email address of the ticket.
      </td>
    </tr>
    <tr>
      <td>Has incidents</td>
      <td>
        Is <code>True</code> if this ticket has been marked as a <code>problem</code>, otherise is <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Due at</td>
      <td>
        Only applies if the ticket is of type <code>task</code>. This shows the due date of the ticket in ISO8601 date format (yyyy-mm-dd).
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The array of tags applied to this ticket.
      </td>
    </tr>
    <tr>
      <td>Tags list</td>
      <td>
        List the most popular tags in the last 60 days.
      </td>
    </tr>
    <tr>
      <td>Ticket form ID</td>
      <td>
        For Enterprise accounts only. The ID of the ticket form associated with this request if the form is visible to end users.
      </td>
    </tr>
    <tr>
      <td>Via</td>
      <td>
        This object explains how the ticket was created.
        <table>
          <body>
            <tr>
              <td>Channels</td>
              <td>Allowed values are <code>API</code> or <code>web</code>.</td>
            </tr>
            <tr>
              <td>Source</td>
              <td>Only for follow-up tickets. This shows the ID of a <code>closed</code> ticket</td>
            </tr>
          </body>
        </table>
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The first comment on the ticket.
      </td>
    </tr>
    <tr>
      <td>Ticket URL</td>
      <td>
        The API URL of this ticket.
      </td>
    </tr>
    <tr>
      <td>Date created</td>
      <td>
        When this record was created.
      </td>
    </tr>
    <tr>
      <td>Date updated</td>
      <td>
        When this record was last updated.
      </td>
    </tr>
    <tr>
      <td>Ticket custom fields</td>
      <td>
        Includes data of custom ticket field created. They are displayed as arrays of <code>"id":"value"</code> pairs. Allowed data types are <code>string</code>, <code>int</code>, or tags.
      </td>
    </tr>
  </tbody>
</table>
