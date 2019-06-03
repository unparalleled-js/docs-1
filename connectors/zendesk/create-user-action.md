---
title: Workato connectors - Zendesk create user action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Create user action

This action creates a single user into your Zendesk instance.

![Create user action](/assets/images/connectors/zendesk/create-user-action.png)
*Create user action*

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
      <td>Name</td>
      <td>
        The name of the user.
      </td>
    </tr>
    <tr>
      <td>Role</td>
      <td>
        The user's role. Allowed values are <code>end-user</code>, <code>agent</code>, or <code>admin</code>.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        Mandatory of the user's role is designated as <code>Agent</code>.<br>
        <br>
        The user's primary email.
      </td>
    </tr>
    <tr>
      <td>Custom user field</td>
      <td>
        Data of a custom field, it is stored as a <code>string</code>.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user input](/connectors/zendesk/user-output.md#user-input).

#### Output fields


The output of this trigger contains the full set of columns from the selected user. All default and custom columns are supported. Here are some of the commonly used outputs.

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
        Unique Zendesk user ID. This is automatically assigned when the ticket is created.
      </td>
    </tr>
    <tr>
      <td>Role</td>
      <td>
        The user's role. Allowed values are <code>end-user</code>, <code>agent</code>, or <code>admin</code>.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        The user's primary email.
      </td>
    </tr>
    <tr>
      <td>Organization ID</td>
      <td>
        The ID of the user's organization. If the user has more than one organization membership, it will display the ID fo the user's default organization.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Includes data of custom user fields.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user output](/connectors/zendesk/user-output.md#user-output).
