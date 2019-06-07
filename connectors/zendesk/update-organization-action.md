---
title: Workato connectors - Zendesk update organization action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Update organization action

This action updates a specific organization your Zendesk instance. The organization is identified by its Zendesk ID. You can update standard and custom fields, and add new notes to the organization. The action will fail if the organization cannot be found.

![Update organization action](/assets/images/connectors/zendesk/update-organization-action.png)
*Update organization action*

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
        Unique Zendesk organization ID. This is automatically assigned when the ticket is created.
      </td>
    </tr>  
    <tr>
      <td>Group ID</td>
      <td>
        The group(s) that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Organization custom fields</td>
      <td>
        Includes data of organization custom fields.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [organization output](/connectors/zendesk/organization-fields.md#organization-output-fields).
