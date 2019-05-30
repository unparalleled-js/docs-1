---
title: Workato connectors - Zendesk comments of ticket action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - Get comments of ticket action

This action retrieves a specific ticket your Zendesk instance that matches a search by ticket ID. Only results that matches the criteria will be returned

![Get ticket comments](/assets/images/connectors/zendesk/get-comments-ticket.png)
*Get ticket comments*

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
  </tbody>
</table>

#### Output fields

The output of this action contains the full list of comments for this ticket, including the description (first comment).

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
      <td>Type</td>
      <td>
        The type of ticket comment. Allowed values are <code>Comment</code>, <code>incident</code> or <code>VoiceComment</code>.
      </td>
    </tr>
    <tr>
      <td>Body</td>
      <td>
        The actual comment made by the author.
      </td>
    </tr>
    <tr>
      <td>HTML body</td>
      <td>
        The actual comment made by the author formatted to HTML.
      </td>
    </tr>
    <tr>
      <td>Public</td>
      <td>
        Is <code>True</code> if this comment is public, otherwise is <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Date created</td>
      <td>
        When this comment was created.
      </td>
      <tr>
        <td>Author ID</td>
        <td>
          The ID of the author of the comment.
        </td>
        <tr>
      <td>Attachments</td>
      <td>
        The attachment on this comments. For more information on attachment objects, please visit the Zendesk API documentation on <a href="https://developer.zendesk.com/rest_api/docs/support/attachmentsthis">topic</a>.
      </td>
    </tr>
  </tbody>
</table>
