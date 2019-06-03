---
title: Workato connectors - Zendesk get user details by ID action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Get user details by ID action

This action retrieves a specific user your Zendesk instance that matches a search by user ID. Only results that matches the criteria will be returned.

![Get user details by ID](/assets/images/connectors/zendesk/get-user-by-id.png)
*Get user details by ID*

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
      <td>User ID</a></td>
      <td>
        The unique Zendesk user ID.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this action contains the full set of columns from the user. Custom outputs are generated for custom user forms.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>User ID</td>
      <td>
        Unique Zendesk user ID. This is automatically assigned when the user is created.
      </td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>
        The subject of the user.
      </td>
    </tr>
    <tr>
      <td>Type</td>
      <td>
        The type of the user. Allowed values are <code>problem</code>, <code>incident</code>, <code>question</code>, or <code>task</code>.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The priority of the user. Allowed values are <code>urgent</code>, <code>high</code>, <code>normal</code>, or <code>low</code>.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Includes data of custom user fields created.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user output](/connectors/zendesk/user-output.md#user-output).
