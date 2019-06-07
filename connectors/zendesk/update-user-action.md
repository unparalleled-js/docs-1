---
title: Workato connectors - Zendesk update user action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Update user action

This action updates a specific user your Zendesk instance. The user is identified by its Zendesk ID. You can update standard and custom fields, and add new comments to the user. The action will fail if the user cannot be found.

It is possible to change the role of an user between `End-user`, `Agent` and `Administrator`, but this will affect your Zendesk user licenses.

![Update user action](/assets/images/connectors/zendesk/update-user-action.png)
*Update user action*

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
      <td>Name</td>
      <td>
        The name of the user.
      </td>
    </tr>
    <tr>
      <td>Role</td>
      <td>
        The user's role. Permitted values are <code>End-user</code>, <code>Agent</code>, or <code>Administrator</code>.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        Mandatory if the user's role is designated as <code>Agent</code>. The primary email of the user.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Provide data for the user custom field(s).
      </td>
    </tr>
  </tbody>
</table>

Click here for more information about [user input](/connectors/zendesk/user-field.md#user-input-fields).

### Output fields

The output of this action contains the full set of columns from the selected user. Here are some of the commonly used outputs.

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
        Unique Zendesk user ID. This is automatically assigned when the user is created.
      </td>
    </tr>
    <tr>
      <td>Role</td>
      <td>
        The role of the user. Permitted values are <code>End-user</code>, <code>Agent</code>, or <code>Administrator</code>.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        The primary email of the user.
      </td>
    </tr>
    <tr>
      <td>Organization ID</td>
      <td>
        The ID of the user's organization. If the user has more than one organization membership, it will display the user's default organization.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Includes data of user custom fields.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user output](/connectors/zendesk/user-fields.md#user-output-fields).
