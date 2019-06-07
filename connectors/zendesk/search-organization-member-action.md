---
title: Workato connectors - Zendesk search organization member action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Search organization member action

A membership links a user to an organization - An organization can have many users, and a users can be in many organizations.

This action retrieves a list of all members in a specified organization. It will retrieve users that matches all your search criteria.

![Search organization member action](/assets/images/connectors/zendesk/search-organization-member-action.png)
*Search organization member action*

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
      <td>Organization ID</td>
      <td>
        The ID of the organization.
      </td>
    </tr>
    <tr>
      <td>Name</a></td>
      <td>
        The name of the member.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        The email of the member.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this trigger contains the full set of columns from the list of members. All default and custom columns are supported. Here are some of the commonly used outputs.

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
    <tr>
      <td>List size</td>
      <td>
        This is the size of the list, corresponding to the number of members retrieved.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user output](/connectors/zendesk/user-fields.md#user-output-fields).
